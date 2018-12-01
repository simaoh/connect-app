'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvents = sequelize.define('UserEvents', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  UserEvents.associate = function(models) {
    // associations can be defined here
    UserEvents.belongsTo(models.User);
    UserEvents.belongsTo(models.Event);
  };
  return UserEvents;
};