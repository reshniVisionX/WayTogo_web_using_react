const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: String,
  description: String,
  college: String
}, { collection: 'blogs' }); 

module.exports = mongoose.model('Blog', blogSchema);
