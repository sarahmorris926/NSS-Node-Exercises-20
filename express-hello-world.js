const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})




app.listen()


// outputs HELLO WORLD when making GET request to root (/) url



// outputs time stamp - new Date().toLocaleTimeString() - when making GET request to (/time) url


// use env variable for port, use 8080 when one is not provided

