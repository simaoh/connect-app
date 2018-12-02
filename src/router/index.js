const path = require('path');
const app = require('./app');
const model = require('../models');
const Sequelize = require('sequelize');
const passport = require('passport');
const Op = Sequelize.Op;

app.get("/am_i_alive", (req, res) => {
  res.send("OK!");
});

app.get("/", (req, res) => {
  res.render('home', {title: 'Home'});
});

app.get("/login", (req, res) => {
  res.render('login');
});

app.get("/notifications", (req, res) => {
  res.render('notifications', {title: 'Notifications'});
});

app.get("/event/new", (req, res) => {
  res.render('newEvent', {title: 'New Event'});
});

app.get("/event/:eventId", (req, res) => {
  model.Event.findByPk(req.params.eventId, {
    include: [{model: model.User, as: 'author'}]
  }).then(event => {
    res.render('eventDetails', {
      title: event.title,
      startAt: event.startAt.toLocaleString(),
      endAt: event.endAt.toLocaleString(),
      description: event.description,
      location: event.location,
      author: event.author
    });
  })
});

// ---------- open api ---------- //
app.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.redirect(req.session.returnTo || "/");
      delete req.session.returnTo;
    });
  })(req, res, next);
});

app.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/login");
});

// ---------- api ---------- //

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
  model.Event.findAll({
    include: [{model: model.User, as: 'author'}]
  }).then(events => {
    res.json(events);
  });
});

// create new event
app.post("/api/event/", (req, res) => {
  const data = req.body;
  data.authorId = req.user.id;
  data.startAt = new Date(req.body.startAt);
  data.endAt = new Date(req.body.endAt);
  model.Event.create(data).then(newEvent => {
    res.json(newEvent.dataValues);
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