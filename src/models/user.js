'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Event, {
      as: 'AuthoredEvents',
      foreignKey: 'authorId'
    });

    User.belongsToMany(models.Event, {
      as: 'AttendingEvents',
      through: 'userEvents'
    });
  };

  return User;
};