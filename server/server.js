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
    .then(data => {
      if (data.length === 0) { res.status(400).json("ID not found") }
      else { res.json(data); }
    })
});

app.get('/amenities-api/amenity/:id', function (req, res) {
  if (!req.params.id) { res.setStatus(400).json("No data for given id")}
  retrieve({ id: req.params.id })
    .then(data => {
      data.length === 0 ? res.status(400).json("ID not found") : res.json(data);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;