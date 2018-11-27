'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [{
      firstName: 'Gang',
      lastName: 'Qiu',
      email: 'gangqiu@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
