'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('USERs', 'users');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('users', 'USERs');
  }
};
