const path = require('path');
const app = require('./app');
const model = require('../models');
const Sequelize = require('sequelize');
const passport = require('passport');
const Op = Sequelize.Op;
const postGisHelper = require('../helpers/postGisHelper');

app.get("/am_i_alive", (req, res) => {
  res.send("OK!");
});

app.get("/", (req, res) => {
  res.redirect('/events')
});

app.get("/events", (req, res) => {
  res.render('events', {title: 'Events'});
});

app.get("/login", (req, res) => {
  res.render('login', {title: 'Login'});
});

app.get("/signup", (req, res) => {
  res.render('signup', {title: 'Sign Up'});
});

app.get("/notifications", (req, res) => {
  res.render('notifications', {title: 'Notifications'});
});

app.get("/event/new", (req, res) => {
  res.render('newEvent', {title: 'New Event'});
});

app.get("/event/:eventId", (req, res) => {
  model.Event.findByPk(req.params.eventId, {
    include: [
      {model: model.User, as: 'author'},
      {model: model.User, as: 'attendingUsers'}
    ]
  }).then(event => {
    res.render('eventDetails', {
      eventId: event.id,
      title: event.title,
      startAt: event.startAt.toLocaleString(),
      endAt: event.endAt.toLocaleString(),
      description: event.description,
      author: event.author.dataValues,
      attendingUsersNames: event.attendingUsers.map(u => {
        return `${u.dataValues.firstName} ${u.dataValues.lastName}`
      })
    });
  })
});

// ---------- open api ---------- //
app.post("/signup", (req, res, next) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.send('password incorrect');
  }

  model.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      return res.send('Email is taken. Please choose another email. ');
    } else {
      return model.User.createNewUser(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password
      )
    }
  }).then(user => {
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.redirect(req.session.returnTo || "/");
      delete req.session.returnTo;
    });
  });
});

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
    include: [
      {model: model.User, as: 'author'},
      {model: model.User, as: 'attendingUsers'}
    ]
  }).then(events => {
    return Promise.all(events.map(event => {
      const eventData = event.toJSON();
      return postGisHelper.distanceBetween(event, req.user).then(distance => {
        eventData.distance = distance;
        return eventData;
      });
    }));
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
    include: [
      {model: model.User, as: 'author'},
      {model: model.User, as: 'attendingUsers'}
    ],
    where: {
      title: {
        [Op.iLike]: `%${req.params.searchTerm}%`
      }
    }
  }).then(results => {
    res.json(results);
  });
});

app.post("/api/event/:eventId/attend", (req, res) => {
  model.UserEvents.create({
    userId: req.user.id,
    eventId: req.params.eventId
  }).then(userEvent => {
    res.send(201);
  });
});

module.exports = app;