'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.User, {as: 'author'});
  };
  return Event;
};