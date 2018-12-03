'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
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

  return Event;
};