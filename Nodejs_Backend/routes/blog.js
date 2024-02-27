const express = require('express');
const router = express.Router();
const Blog = require('../model/BlogSpot');

router.get('/', (req, res, next) => {
    Blog.find((err, blogs) => {
      if (err) {
        console.log(err);
      } else {
        res.json(blogs);
      }
    });
    next()
  });
  
  router.post('/blog', (req, res) => {
    const { image, name, description, college } = req.body;
    const newBlog = new Blog({ image, name, description, college });
  
    newBlog.save()
      .then(() => res.json('Blog added!'))
      .catch(err => res.status(400).json('Error: ' + err));

      next()
  });

module.exports = router;
