'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// set pug as template engine and /public/html as the views directory
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// set the path for static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// set app port and json parser
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

module.exports = app;