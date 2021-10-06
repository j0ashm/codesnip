const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
})

db.on('open', () => {
  console.log('Connected to db.');
})

const PORT = 5000;

const app = express();

app.use(express.json());

const routes = require('./apiRoutes')
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});