'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [{
      firstName: 'Gang',
      lastName: 'Qiu',
      email: 'gangqiu@demo.com',
      passwordHash: 'password'
    }, {
      firstName: 'Simao',
      lastName: 'Herdade',
      email: 'Simao@demo.com',
      passwordHash: 'password'
    }, {
      firstName: 'Michael',
      lastName: 'Coussement',
      email: 'Michael@demo.com',
      passwordHash: 'password'
    }, {
      firstName: 'Tim',
      lastName: 'Qiu',
      email: 'Timeqiu@demo.com',
      passwordHash: 'password'
    }, {
      firstName: 'Jim',
      lastName: 'Herdade',
      email: 'Jim@demo.com',
      passwordHash: 'password'
    }, {
      firstName: 'Vim',
      lastName: 'Coussement',
      email: 'Vim@demo.com',
      passwordHash: 'password'
    },]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
