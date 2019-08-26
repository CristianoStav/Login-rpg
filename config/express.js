require('dotenv').config();
const express = require('express');
const app = express();
const Routes = require('../routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Routes);

module.exports = app;