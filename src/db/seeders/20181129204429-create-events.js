'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("events", [{
      title: 'Coffee',
      location: 'Manhattan NY',
      description: 'Want to get some espresso',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 1
    }, {
      title: 'Comedy Show',
      location: 'Brooklyn NY',
      description: 'Want to watch Louis CK',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 2
    }, {
      title: 'Tennis this weekend',
      location: 'Manhattan NY',
      description: 'Lets play a few games',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      authorId: 3
    }, {
      title: 'Hiking in the mountains',
      location: 'Syracuse NY',
      description: 'Catskills anyone? 10 mile hike round trip',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 4
    }, {
      title: 'Surfing at the beach',
      location: 'Far Rockaway NY',
      description: 'Let\'s catch some waves!',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 5
    }, {
      title: 'Coding Practice',
      location: 'Manhattan NY',
      description: 'Want to get some javascript',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 6
    }, {
      title: 'Rock Concert',
      location: 'Brooklyn NY',
      description: 'Want to watch Britney Spears',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 1
    }, {
      title: 'Backstreet Boys',
      location: 'Manhattan NY',
      description: 'Let\'s be 13 again',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      authorId: 2
    }, {
      title: 'Volunteer at homeless shelter',
      location: 'Syracuse NY',
      description: 'Do something nice',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 2
    }, {
      title: 'Surfing at at Rockaway NY',
      location: 'Far Rockaway NY',
      description: 'Waves, let\'s catch some',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 6
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null);
  }
};
