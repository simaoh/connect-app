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
        email: 'simao@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Michael',
        lastName: 'Coussement',
        email: 'michael@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Tim',
        lastName: 'Qiu',
        email: 'timeqiu@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Jim',
        lastName: 'Herdade',
        email: 'jim@demo.com',
        passwordHash: passwordHash
      }, {
        firstName: 'Vim',
        lastName: 'Coussement',
        email: 'vim@demo.com',
        passwordHash: passwordHash
      },]);
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
