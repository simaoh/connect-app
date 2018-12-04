'use strict';
const model = require('../../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const manhattan = {longitude: 40.6782, latitude: 73.9442};
    const brooklyn  = {longitude: 40.7831, latitude: 73.9712};
    const queens    = {longitude: 40.7282, latitude: 73.7949};

    return Promise.all([
      model.Location.create(manhattan),
      model.Location.create(brooklyn),
      model.Location.create(queens),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null);
  }
};
