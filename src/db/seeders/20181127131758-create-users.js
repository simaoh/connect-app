'use strict';
const bcryptPromise = require('../../helpers/bcryptPromise');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return bcryptPromise.hashify('password').then(passwordHash => {
      return queryInterface.bulkInsert("users", [{
        firstName: 'Gang',
        lastName: 'Qiu',
        email: 'gangqiu@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Simao',
        lastName: 'Herdade',
        email: 'Simao@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Michael',
        lastName: 'Coussement',
        email: 'Michael@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Tim',
        lastName: 'Qiu',
        email: 'Timeqiu@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Jim',
        lastName: 'Herdade',
        email: 'Jim@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Vim',
        lastName: 'Coussement',
        email: 'Vim@demo.com',
        passwordHash: passwordHash
      },]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
