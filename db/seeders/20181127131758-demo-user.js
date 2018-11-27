'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("USERs", [{
      firstName: 'Gang',
      lastName: 'Qiu',
      email: 'gangqiu@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("USERs", null);
  }
};
