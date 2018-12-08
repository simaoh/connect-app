const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcryptPromise = require('../helpers/bcryptPromise');

console.log('password ', Object.keys(models))
const authenticateByEmailAndPasswordStrategy = new LocalStrategy({
  usernameField: 'email'
}, (email, password, done) => {
    models.User.findOne({
      where: {
        email: email.toLowerCase(),
      }
    }).then(user => {
      bcryptPromise.compare(password, user.passwordHash).then(result => {
        if (result) {
          done(undefined, user);
        } else {
          done('password incorrect');
        }
      });
    }).catch(err => {
      done(err);
    });
});

const serializeUserhandler = (user, done) => {
  done(undefined, user.id);
};

const deserializeUserhandler = (id, done) => {
  models.User.findByPk(id).then(user => {
    return done(undefined, user);
  }).catch(err => {
    return done(err);
  })
};

module.exports = function(passport) {
  passport.use(authenticateByEmailAndPasswordStrategy);
  passport.serializeUser(serializeUserhandler);
  passport.deserializeUser(deserializeUserhandler);
}