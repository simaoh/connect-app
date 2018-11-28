'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());

module.exports = app;