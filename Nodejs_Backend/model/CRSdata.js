const mongoose = require('mongoose');

const crsDataSchema = new mongoose.Schema({
    dob: { type: Date, required: true },
    qualificationLevel: { type: String, required: true },
    workExperience: { type: String, required: true },
    ieltsProficiency: { type: String, required: true },
    spouseLanguageLevel: { type: String },
    academicYearsInCanada: { type: Boolean, default: false },
    spouseAcademicYearsInCanada: { type: Boolean, default: false },
    workInCanada: { type: Boolean, default: false },
    spouseWorkInCanada: { type: Boolean, default: false },
    validJobOffer: { type: Boolean, default: false },
    relativeInCanada: { type: Boolean, default: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    nearestWayTogoOffice: { type: String, required: true },
  });
const CRSDataModel = mongoose.model('CRSData', crsDataSchema);

module.exports = CRSDataModel;

