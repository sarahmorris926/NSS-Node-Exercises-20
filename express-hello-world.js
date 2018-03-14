const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)


// outputs HELLO WORLD when making GET request to root (/) url


// outputs time stamp - new Date().toLocaleTimeString() - when making GET request to (/time) url


// use env variable for port, use 8080 when one is not provided

