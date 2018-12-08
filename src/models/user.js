'use strict';
const bcryptPromise = require('../helpers/bcryptPromise');
const geoJsonMixins = require('./mixins/geoJsonMixins');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    geopoint: DataTypes.GEOMETRY('POINT', 4326),
  }, {
    tableName: 'users'
  });

  User.associate = models => {
    User.hasMany(models.Event, {
      as: 'authoredEvents',
      foreignKey: 'authorId'
    });

    User.hasMany(models.UserEvents, {foreignKey: 'userId'});

    User.belongsToMany(models.Event, {
      as: 'attendingEvents',
      through: 'userEvents',
      foreignKey: 'userId'
    });
  };

  // postgis functions
  User.prototype.geoJsonFromCoordinates = geoJsonMixins.geoJsonFromCoordinates;
  User.prototype.getLocationGeo = geoJsonMixins.geoFromGeomPoint;
  User.addHook('beforeSave', model => {
    if (model.longitude && model.latitude) {
      model.geopoint = model.geoJsonFromCoordinates();
    }
  });

  User.createNewUser = (firstName, lastName, email, password) => {
    // assumes email and password are validated
    return bcryptPromise.hashify(password).then(hash => {
      return User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        passwordHash: hash
      });
    });
  };

  return User;
};