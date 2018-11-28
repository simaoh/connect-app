'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;