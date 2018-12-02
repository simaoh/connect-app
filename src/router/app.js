'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// set pug as template engine and /public/html as the views directory
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// set the path for static files
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', '..', 'bower_components')));

// set app port and json parser
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

// set up session
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'HEY',
}));

module.exports = app;