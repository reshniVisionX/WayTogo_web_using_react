const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


require('../model/studentDetails');

const User = mongoose.model("student");

router.post('/register', async (req, res, next) => {
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
    next()
});

module.exports = router;
