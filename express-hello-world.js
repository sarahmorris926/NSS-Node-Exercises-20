const express = require('express');
const app = express();
require('dotenv').config();

// outputs HELLO WORLD when making GET request to root (/) url
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


// outputs time stamp - new Date().toLocaleTimeString() - when making GET request to (/time) url


// use env variable for port, use 8080 when one is not provided
app.listen()
