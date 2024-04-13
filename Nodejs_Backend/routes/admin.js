const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const router = express.Router(); 
const mongoose = require("mongoose");
const programData = require("../model/programSchema");

router.post('/data',async(req,res)=>{
    try{
        const {program,location,when,timing,seatCapacity}=req.body;
        const newProgram = new programData({
            program,
            location,
            when,
            timing,
            seatCapacity
        });
        await newProgram.save();
        res.status(200).json({ message: 'Program added successfully' });
    }catch(error){
        console.error('Error adding program:', error);
        res.status(500).json({ error: 'Failed to add program to db' });
    }
})
module.exports = router;