const express = require('express');
const app = express();
const { retrieve } = require('./db/index.js')
const cors = require('cors')
const bodyParser = require ('body-parser');
require('dotenv').config()

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors())

app.get('/amenities-api/amenities', function (req, res) {
  retrieve({})
    .then(data => res.json(data));
});

app.get('/amenities-api/amenity/:id', function (req, res) {
  const { id } = req.params;
  retrieve({ id })
    .then(data => res.json(data[0]));
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;