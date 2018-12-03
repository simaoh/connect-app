'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
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

  return User;
};