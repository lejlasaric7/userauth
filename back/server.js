const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(morgan('combined'));

// Rutiranje za prikaz HTML datoteke na osnovnoj ruti
app.get('/', (req, res) => {
    res.send("hello from Node.js, good luck")
});


// Slušaj na određenom portu
app.listen(3000, () => {
    console.log('Server je pokrenut na portu 3000');
});

const dbService = require('./services/db-service');
dbService.initOracleClient();
