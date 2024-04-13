const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "randomKeysimplygivefrntmgt8374544*";
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


require('../model/studentDetails');

const User = mongoose.model("student");
const { body, validationResult } = require('express-validator');


const validateSignup = [

  body('number').isLength({ min: 10, max: 10 }).withMessage('Number must be 10 characters long'),


  body('email').isEmail().withMessage('Invalid email address'),

  
  body('rpassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  }),
];

router.post('/register',validateSignup, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { number, email, password, rpassword } = req.body;
    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        if (password !== rpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            number,
            email,
            password: hashedPassword,
        });
        res.status(200).json({ status: "ok", message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
   
});
//pass : reshni
router.post('/login', async (req, res,next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }
        console.log("logged in success");
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        return res.json({ status: "ok", data: token });
      
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

router.post("/userData", async(req,res,next)=>{
    const{token} = req.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        User.findOne({email: useremail})
        .then((data)=>{
            res.send({status: "ok", data:data});
            console.log(data);
        }).catch((error)=>{
            res.send({status: "error", data: error});
        })
    }catch(error){
      console.log("Error...");
    }
})

module.exports = router;
