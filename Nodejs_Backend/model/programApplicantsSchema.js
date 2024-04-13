const mongoose = require('mongoose');

const programApplicantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  programID: {
    type: String,
    required: true
  }
});

const ProgramApplicants = mongoose.model('ProgramApplicants', programApplicantsSchema);

module.exports = ProgramApplicants;
