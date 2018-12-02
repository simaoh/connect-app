'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfigure = require('./passportConfig');
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
app.use(bodyParser.urlencoded({ extended: true })); // read form data

// set up session and authentication
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'HEY',
}));
app.use(passport.initialize());
app.use(passport.session());

// add the authenticated user to the response context
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// set up passport authentication and user serialization logic
passportConfigure(passport);

module.exports = app;