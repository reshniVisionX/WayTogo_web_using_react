const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const router = express.Router();
const mongoose = require("mongoose");
const PNPDataModel = require('../model/pnp_finder');
require('../model/CRSdata');
const CRSDataModel  = mongoose.model('CRSData');
const PRCalculator = require('../model/pr_australia');


router.post('/CRScalculator', async (req, res) => {
    try {
        const {
            dob,
            qualificationLevel,
            workExperience,
            ieltsProficiency,
            spouseLanguageLevel,
            academicYearsInCanada,
            spouseAcademicYearsInCanada,
            workInCanada,
            spouseWorkInCanada,
            validJobOffer,
            relativeInCanada,
            name,
            email,
            phoneNumber,
            nearestWayTogoOffice
        } = req.body;

       
        if (!dob || !qualificationLevel || !workExperience || !ieltsProficiency || !name || !email || !phoneNumber || !nearestWayTogoOffice) {
            return res.status(400).json({ error: 'Invalid data provided' });
        }

        
        const crsData = new CRSDataModel({
            dob,
            qualificationLevel,
            workExperience,
            ieltsProficiency,
            spouseLanguageLevel,
            academicYearsInCanada,
            spouseAcademicYearsInCanada,
            workInCanada,
            spouseWorkInCanada,
            validJobOffer,
            relativeInCanada,
            name,
            email,
            phoneNumber,
            nearestWayTogoOffice
        });
        await crsData.save();

     
        res.status(201).json(crsData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get('/PNPfinder', async (req, res) => {
    try {
      
        const { province, expressEntryAligned, jobOfferRequired } = req.query;
        
        const filter = {};
        if (province) {
            filter.province = province;
        }
        if (expressEntryAligned) {
            filter.expressEntryAligned = expressEntryAligned;
        }
        if (jobOfferRequired) {
            filter.jobOfferRequired = jobOfferRequired;
        }

        const pnpData = await PNPDataModel.find(filter);
        res.json(pnpData);
    } catch (error) {
       
        console.error('Error fetching PNP data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/PRcalculator', async (req, res) => {
    try {
        const prCalculatorData = req.body;
        const prCalculator = new PRCalculator(prCalculatorData);
        await prCalculator.save();
        console.log("data saved")
        res.status(201).json(prCalculator);
    } catch (error) {
        console.error('Error saving PR Calculator data:', error);
        res.status(500).json({ message: 'Failed to save PR Calculator data' });
    }
});

  module.exports = router;