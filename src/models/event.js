'use strict';
const geoJsonMixins = require('./mixins/geoJsonMixins');

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    geopoint: DataTypes.GEOMETRY('POINT', 4326),
  }, {
    tableName: 'events'
  });

  Event.associate = models => {
    Event.belongsTo(models.User, {as: 'author'});
    Event.hasMany(models.UserEvents, {foreignKey: 'eventId'});
    Event.belongsToMany(models.User, {
      as: 'attendingUsers',
      through: 'userEvents',
      foreignKey: 'eventId',
    });
  };

  Event.prototype.geoJsonFromCoordinates = geoJsonMixins.geoJsonFromCoordinates;
  Event.prototype.getLocationGeo = geoJsonMixins.geoFromGeomPoint;

  Event.addHook('beforeSave', event => {
    if (event.longitude && event.latitude) {
      event.geopoint = event.geoJsonFromCoordinates();
    }
  });

  return Event;
};