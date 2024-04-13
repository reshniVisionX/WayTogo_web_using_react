const express = require('express');
const router = express.Router();

router.post('/send-message', (req, res,next) => {
  const message = req.body.message;


  res.json({ status: 'Message sent successfully' });
  res.send(message);
  next();
});


router.get('/', (req, res, next) => {
  
  const messages = ['Message 1', 'Message 2', 'Message 3'];
  res.json({ messages: messages });
  next();
});


module.exports = router;
