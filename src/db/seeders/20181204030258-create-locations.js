'use strict';
const model = require('../../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const manhattan    = {longitude: 40.714673488595935, latitude: -74.00453321635725};
    const brooklyn     = {longitude: 40.64977817702309, latitude: -73.9482879638672};
    const queens       = {longitude: 40.68193981454855, latitude: -73.8329315185547};
    const philadelphia = {longitude: 39.9526, latitude: -75.1652};
    const washingtonDC = {longitude: 38.9072, latitude: -77.0369};
    const raleigh      = {longitude: 35.7796, latitude: -78.6382};
    const houston      = {longitude: 29.7604, latitude: -95.3698};
    const losAngeles   = {longitude: 34.0522, latitude: -118.2437};

    return model.Location.create(manhattan)
      .then(() => {return model.Location.create(brooklyn);})
      .then(() => {return model.Location.create(queens);})
      .then(() => {return model.Location.create(philadelphia );})
      .then(() => {return model.Location.create(washingtonDC );})
      .then(() => {return model.Location.create(raleigh      );})
      .then(() => {return model.Location.create(houston      );})
      .then(() => {return model.Location.create(losAngeles   );})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null);
  }
};
