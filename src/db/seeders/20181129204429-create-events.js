'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Events", [{
      title: 'Coffee',
      location: 'Manhattan NY',
      description: 'Want to get some espresso',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Comedy Show',
      location: 'Brooklyn NY',
      description: 'Want to watch Louis CK',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Tennis this weekend',
      location: 'Manhattan NY',
      description: 'Lets play a few games',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Hiking in the mountains',
      location: 'Syracuse NY',
      description: 'Catskills anyone? 10 mile hike round trip',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Surfing at the beach',
      location: 'Far Rockaway NY',
      description: 'Let\'s catch some waves!',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null);
  }
};
