const express = require('express');
const router = express.Router();
const Blog = require('../model/BlogSpot');
const mongoose = require("mongoose");
const multer = require('multer');
const programSchema = require("../model/programSchema");
const path = require('path');
const ProgramApplicants= require("../model/programApplicantsSchema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../../abroad_consultancy/src/uploads');
    cb(null, uploadDir);
    //cb(null, '../../abroad_consultancy/src/uploads');
  },
  filename: function (req, file, cb) {
    const unqiuesuffix=Date.now();
    cb(null, unqiuesuffix+file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  const { name, description, college } = req.body;
  const image = req.file.filename; 
console.log(req.body);
  const newBlog = new Blog({
    image,
    name,
    description,
    college
  });

  try {
    await newBlog.save();
    res.json('Blog added!');
  } catch (err) {
    console.error('Error adding blog:', err);
    res.status(400).json('Error: ' + err);
  }
});

const faqSchema = new mongoose.Schema({
  id: Number,
  question: String,
  answer: String
});

const FAQ = mongoose.model('FAQ', faqSchema);
router.get('/faq', async (req, res) => {
  try {
      const faqData = await FAQ.find({});
      res.json(faqData);
  } catch (error) {
      console.error('Error fetching FAQ data:', error);
      res.status(500).json({ message: 'Failed to fetch FAQ data' });
  }
});



// const programSch =new mongoose.Schema({
    
//   id : Number,
//   program: String,
//   location : String,
//   when : String,
//   timing: String
// });
//const Program = mongoose.model('Program',programSch);

router.get('/programs/:id', async (req, res) => {
  const id = req.params.id;
  console.log("ID is ..", id);
  try {
    const program = await programSchema.findOne({ id: id }).exec();
    console.log(program);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    console.log("id found");
    res.json(program);
  } catch (error) {
    console.error('Error fetching program:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.patch('/programs/:selectedProgram', async (req, res) => {
  const selectedProgram = req.params.selectedProgram;
  const { seatCapacity } = req.body;
  const newseat = seatCapacity;
  console.log(selectedProgram," seatCapacity..patch request ",newseat);
  console.log(typeof(newseat), typeof(selectedProgram ))
  
  try {
    
    const updatedProgram = await programSchema.findOneAndUpdate(
      { id: selectedProgram },
      { seatCapacity: newseat },
      { new: true }
    ).exec();  
    if (!updatedProgram) {
      console.log('Program not found',updatedProgram);
      res.json({"error: ":" program not found"});
    } else {
      console.log('Program updated successfully:', updatedProgram);
      res.json(updatedProgram); 
    }
  } catch (error) {
    console.error('Error updating program seat capacity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/programs/:id', async (req, res) => {
  const { id } = req.params;
  console.log("Deleting..",id)
  try {
   
    const deletedProgram = await programSchema.findOneAndDelete(id).exec();

    if (!deletedProgram) {
      return res.status(404).json({ message: 'Program not found' });
    }else
      console.log("deleted the program in db");
   
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    console.error('Error deleting program:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/programs', async (req, res) => {
  try{
    const program = await programSchema.find({});
 
    res.json(program);
  }catch(error){
    console.log("Error..",error);
    res.status(500).json({ message: 'Failed to fetch Program data' });
  }
})

router.post('/programs/applicant', async (req,res)=>{
  try {
  
    const { name, email, seats, programID } = req.body;

    const newApplicant = new ProgramApplicants({
      name,
      email,
      seats,
      programID
    });

    await newApplicant.save();

    res.status(201).json({ message: 'Applicant added successfully' });
  } catch (error) {
  
    console.error('Error adding applicant:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

})

module.exports = router;
