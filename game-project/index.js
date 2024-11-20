require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//const User = require('./models/User') // USER MODEL
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
