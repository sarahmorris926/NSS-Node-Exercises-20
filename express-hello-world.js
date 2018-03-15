const express = require('express');
const app = express();
require('dotenv').config();

// outputs HELLO WORLD when making GET request to root (/) url
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


// outputs time stamp when making GET request to (/time) url in ISO format
app.get('/time', (req, res) => {
    let currentTime = new Date().toISOString('en-US')
    res.send(`<h3>Current Time: ${currentTime}</h3>`)
})

// stretch goal - outputs time stamp when making GET request in better format
app.get('/bettertime', (req, res) => {
    let currentTime = new Date().toLocaleTimeString('en-US')
    res.send(`<h3>Current Time: ${currentTime}</h3>`)
})


// use env variable for port, use 8080 when one is not provided
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Listening on port ', port);
});
