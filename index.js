const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for messages
let messages = [];

// Route to handle POST requests to add a message
app.post('/message', (req, res) => {
    const message = req.body;
    messages.push(message);
    console.log('Received new message:', message);
    res.status(201).json({ message: 'Message received successfully' });
});

// Route to retrieve all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Serve the static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
