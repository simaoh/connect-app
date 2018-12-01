const path = require('path');
const app = require('./app');
const model = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

app.get("/am_i_alive", (req, res) => {
  res.send("OK!");
});

app.get("/", (req, res) => {
  res.render('home', {title: 'Home'});
});

app.get("/notifications", (req, res) => {
  res.render('notifications', {title: 'Notifications'});
});

app.get("/event/new", (req, res) => {
  res.render('newEvent', {title: 'New Event'});
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
  // find all current events
  // TODO: prefetch event users
  model.Event.findAll({
    // this is not working correctly. we have n+1 query
    include: [{model: model.User, as: 'author'}]
  }).then(events => {
    res.json(events);
  });
});

// return events where the title matches a search term
app.get("/api/events/:searchTerm", (req, res) => {
  model.Event.findAll({
    include: [{model: model.User, as: 'author'}],
    where: {
      title: {
        [Op.iLike]: `%${req.params.searchTerm}%`
      }
    }
  }).then(results => {
    res.json(results);
  });
});

module.exports = app;