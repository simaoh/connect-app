'use strict';
const model = require('../../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const manhattan    = {longitude: 40.6782, latitude: 73.9442};
    const brooklyn     = {longitude: 40.7831, latitude: 73.9712};
    const queens       = {longitude: 40.7282, latitude: 73.7949};
    const philadelphia = {longitude: 39.9526, latitude: 75.1652};
    const washingtonDC = {longitude: 38.9072, latitude: 77.0369};
    const raleigh      = {longitude: 35.7796, latitude: 78.6382};
    const houston      = {longitude: 29.7604, latitude: 95.3698};
    const losAngeles   = {longitude: 34.0522, latitude: 118.2437};

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
