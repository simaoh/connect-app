'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvents = sequelize.define('userEvents', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
  }, {
    tableName: 'userEvents'
  });
  UserEvents.associate = function(models) {
    // associations can be defined here
    UserEvents.belongsTo(models.User);
    UserEvents.belongsTo(models.Event);
  };
  return UserEvents;
};