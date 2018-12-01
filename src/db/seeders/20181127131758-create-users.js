'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [{
      firstName: 'Gang',
      lastName: 'Qiu',
      email: 'gangqiu@demo.com',
    }, {
      firstName: 'Simao',
      lastName: 'Herdade',
      email: 'Simao@demo.com',
    }, {
      firstName: 'Michael',
      lastName: 'Coussement',
      email: 'Michael@demo.com',
    }, {
      firstName: 'Tim',
      lastName: 'Qiu',
      email: 'Timeqiu@demo.com',
    }, {
      firstName: 'Jim',
      lastName: 'Herdade',
      email: 'Jim@demo.com',
    }, {
      firstName: 'Vim',
      lastName: 'Coussement',
      email: 'Vim@demo.com',
    },]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
