'use strict';
const locations = require('./seeds/locations');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("events", [{
      title: 'Coffee',
      longitude: locations.manhattan.longitude,
      latitude: locations.manhattan.latitude,
      locationPoint: locations.manhattan.geoJson,
      description: 'Want to get some espresso',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 1
    }, {
      title: 'Comedy Show',
      longitude: locations.brooklyn.longitude,
      latitude: locations.brooklyn.latitude,
      locationPoint: locations.brooklyn.geoJson,
      description: 'Want to watch Louis CK',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 2
    }, {
      title: 'Tennis this weekend',
      longitude: locations.queens.longitude,
      latitude: locations.queens.latitude,
      locationPoint: locations.queens.geoJson,
      description: 'Lets play a few games',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      authorId: 3
    }, {
      title: 'Hiking in the mountains',
      longitude: locations.manhattan.longitude,
      latitude: locations.manhattan.latitude,
      locationPoint: locations.manhattan.geoJson,
      description: 'Catskills anyone? 10 mile hike round trip',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 4
    }, {
      title: 'Surfing at the beach',
      longitude: locations.brooklyn.longitude,
      latitude: locations.brooklyn.latitude,
      locationPoint: locations.brooklyn.geoJson,
      description: 'Let\'s catch some waves!',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 5
    }, {
      title: 'Coding Practice',
      longitude: locations.philadelphia.longitude,
      latitude: locations.philadelphia.latitude,
      locationPoint: locations.philadelphia.geoJson,
      description: 'Want to get some javascript',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 6
    }, {
      title: 'Rock Concert',
      longitude: locations.washingtonDC.longitude,
      latitude: locations.washingtonDC.latitude,
      locationPoint: locations.washingtonDC.geoJson,
      description: 'Want to watch Britney Spears',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 1
    }, {
      title: 'Backstreet Boys',
      longitude: locations.raleigh.longitude,
      latitude: locations.raleigh.latitude,
      locationPoint: locations.raleigh.geoJson,
      description: 'Let\'s be 13 again',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      authorId: 2
    }, {
      title: 'Volunteer at homeless shelter',
      longitude: locations.houston.longitude,
      latitude: locations.houston.latitude,
      locationPoint: locations.houston.geoJson,
      description: 'Do something nice',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 2
    }, {
      title: 'Surfing at at Rockaway NY',
      longitude: locations.losAngeles.longitude,
      latitude: locations.losAngeles.latitude,
      locationPoint: locations.losAngeles.geoJson,
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
