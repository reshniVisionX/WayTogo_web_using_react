const mongoose = require('mongoose');


const programSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  id:{
    type:String,
    require: true,
    unique:true,
  },
  program: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  when: {
    type: String,
    required: true
  },
  timing: {
    type: String,
    required: true
  },
  seatCapacity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('programs', programSchema);
