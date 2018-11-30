const path = require('path');
const app = require('./app');
const model = require('../models');

app.get("/am_i_alive", (req, res) => {
  res.send("OK!");
});

app.get("/", (req, res) => {
  res.render('home', {title: 'Home'});
});

app.get("/notifications", (req, res) => {
  res.render('notifications', {title: 'Notifications'});
});

app.get("/event/details/:eventId", (req, res) => {
  console.log(req.params.eventId);
});

app.get("/api/user/:userId", (req, res) => {
  console.log(req.params.userId);
  model.User.findByPk(req.params.userId).then(user => {
    if (user) {
      res.json(user.dataValues);
    } else {
      res.status(404).send();
    }
  })
});

app.post("/api/user/", (req, res) => {
  console.log(req.body)
  res.send()
});

// get all events
app.get("/api/events", (req, res) => {
  model.Event.findAll().then(events => {
    res.json(events);
  });
});

app.get("/api/events/:searchTerm", (req, res) => {
  console.log(req.params.searchTerm);
  res.send({events: []});
});

module.exports = app;