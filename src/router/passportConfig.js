const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;

const AuthenticateByEmailAndPasswordStrategy = new LocalStrategy({
  usernameField: 'email'
}, (email, password, done) => {
  User.findOne({email: email, password: password}).then(user => {
    return done(undefined, user);
  }).catch(err => {
    done(err);
  });
});

const serializeUserhandler = (user, done) => {
  done(undefined, user.id);
};

const deserializeUserhandler = (id, done) => {
  User.findByPk(id).then(user => {
    return done(undefined, user);
  }).catch(err => {
    return done(err);
  })
};

module.exports = function(passport) {
  passport.use(AuthenticateByEmailAndPasswordStrategy);
  passport.serializeUser(serializeUserhandler);
  passport.deserializeUser(deserializeUserhandler);
}