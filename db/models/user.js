'use strict';
module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  USER.associate = function(models) {
    // associations can be defined here
  };
  return USER;
};