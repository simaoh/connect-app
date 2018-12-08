'use strict';
const bcryptPromise = require('../../helpers/bcryptPromise');
const locations = require('../../helpers/seeds/locations');
const models = require('../../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return bcryptPromise.hashify('password').then(passwordHash => {
      return models.User.bulkCreate([{
        firstName: 'Gang',
        lastName: 'Qiu',
        email: 'gangqiu@demo.com',
        passwordHash: passwordHash,
        longitude: locations.manhattan.longitude,
        latitude: locations.manhattan.latitude
      }, {
        firstName: 'Simao',
        lastName: 'Herdade',
        email: 'simao@demo.com',
        passwordHash: passwordHash,
        longitude: locations.brooklyn.longitude,
        latitude: locations.brooklyn.latitude
      }, {
        firstName: 'Michael',
        lastName: 'Coussement',
        email: 'michael@demo.com',
        passwordHash: passwordHash,
        longitude: locations.queens.longitude,
        latitude: locations.queens.latitude
      }, {
        firstName: 'Tim',
        lastName: 'Qiu',
        email: 'timeqiu@demo.com',
        passwordHash: passwordHash,
        longitude: locations.losAngeles.longitude,
        latitude: locations.losAngeles.latitude
      }, {
        firstName: 'Jim',
        lastName: 'Herdade',
        email: 'jim@demo.com',
        passwordHash: passwordHash,
        longitude: locations.philadelphia.longitude,
        latitude: locations.philadelphia.latitude
      }, {
        firstName: 'Vim',
        lastName: 'Coussement',
        email: 'vim@demo.com',
        passwordHash: passwordHash,
        longitude: locations.washingtonDC.longitude,
        latitude: locations.washingtonDC.latitude
      }], { individualHooks: true });
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
