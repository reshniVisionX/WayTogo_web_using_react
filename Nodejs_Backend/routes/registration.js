const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

require('../model/Registration');
const Form = mongoose.model('registration');

router.post('/regis', async(req, res,next) => {
    const { salutation, name, email, password, phone, dob, gender, address,state, city, country } = req.body;
    console.log(req.body);
    console.log("server side registration success");
    try {
      
        const existingUser = await Form.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }
       
       const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Form.create({
            salutation,
            name,
            email,
            password: hashedPassword,
            phone,
            dob,
            gender,
            address,
            state,
            city,
            country
        });

        res.status(200).json({ status: "ok", message: "User registered successfully", user: newUser });
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
    next();
});

module.exports = router;
