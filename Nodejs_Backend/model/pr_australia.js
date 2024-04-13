
const mongoose = require('mongoose');

const PRCalculatorSchema = new mongoose.Schema({
    age: {
        type: String,
        required: true
    },
    englishProficiency: {
        type: String,
        required: true
    },
    overseasWorkExperience: {
        type: String,
        required: true
    },
    australianWorkExperience: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    otherFactors: {
        type: String,
        required: true
    },
    sponsorshipsAndNominations: {
        type: String,
        required: true
    },
    visaSubclass: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    nearestWayTogoOffice: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

const PRCalculator = mongoose.model('PRCalculator', PRCalculatorSchema);

module.exports = PRCalculator;
