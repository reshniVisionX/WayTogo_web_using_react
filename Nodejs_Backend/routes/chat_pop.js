const express = require('express');
const router = express.Router();

// Endpoint to receive messages
router.post('/send-message', (req, res,next) => {
  const message = req.body.message;

  // Handle the message, e.g., send it to the admin, store it in a database, etc.

  // Respond to the client
  res.json({ status: 'Message sent successfully' });
  res.send(message);
  next();
});

// Endpoint to fetch messages
router.get('/', (req, res, next) => {
  // Fetch messages from a source (e.g., database) or handle as per your logic

  // Dummy example - returning static messages
  const messages = ['Message 1', 'Message 2', 'Message 3'];

  // Send the messages back to the client
  res.json({ messages: messages });
  next();
});


module.exports = router;
