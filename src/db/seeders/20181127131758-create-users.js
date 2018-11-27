'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      firstName: 'Gang',
      lastName: 'Qiu',
      email: 'gangqiu@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Simao',
      lastName: 'Herdade',
      email: 'Simao@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null);
  }
};
