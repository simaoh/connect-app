'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userEvents', [
      {userId: 1, eventId: 1},
      {userId: 2, eventId: 1},
      {userId: 3, eventId: 1},
      {userId: 4, eventId: 1},
      {userId: 5, eventId: 1},
      {userId: 1, eventId: 2},
      {userId: 1, eventId: 3},
      {userId: 1, eventId: 4},
      {userId: 1, eventId: 5},
      {userId: 1, eventId: 6},
      {userId: 1, eventId: 7},
      {userId: 1, eventId: 8},
      {userId: 1, eventId: 9},
      {userId: 1, eventId: 10},
      {userId: 2, eventId: 6},
      {userId: 2, eventId: 7},
      {userId: 2, eventId: 8},
      {userId: 2, eventId: 9},
      {userId: 2, eventId: 10},
      {userId: 3, eventId: 8},
      {userId: 3, eventId: 9},
      {userId: 3, eventId: 10},
      {userId: 4, eventId: 10},
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userEvents', null);
  }
};
