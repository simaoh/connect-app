'use strict';
const locations = require('../../helpers/seeds/locations');
const models = require('../../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.Event.bulkCreate([{
      title: 'Coffee in NYC',
      longitude: locations.manhattan.longitude,
      latitude: locations.manhattan.latitude,
      description: 'Want to get some espresso',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 1
    }, {
      title: 'Brooklyn Comedy Show',
      longitude: locations.brooklyn.longitude,
      latitude: locations.brooklyn.latitude,
      description: 'Want to watch Louis CK',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 2
    }, {
      title: 'Tennis this weekend in Queens',
      longitude: locations.queens.longitude,
      latitude: locations.queens.latitude,
      description: 'Lets play a few games',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      authorId: 3
    }, {
      title: 'Walking in Central Park',
      longitude: locations.manhattan.longitude,
      latitude: locations.manhattan.latitude,
      description: 'Run or walk, choose your pace',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 4
    }, {
      title: 'Surfing at the Rockaway Beach',
      longitude: locations.brooklyn.longitude,
      latitude: locations.brooklyn.latitude,
      description: 'Let\'s catch some waves!',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 5
    }, {
      title: 'Get a Philly Cheesesteak',
      longitude: locations.philadelphia.longitude,
      latitude: locations.philadelphia.latitude,
      description: 'become more disgusting than we already are',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 6
    }, {
      title: 'Protest at the white house',
      longitude: locations.washingtonDC.longitude,
      latitude: locations.washingtonDC.latitude,
      description: 'Donald trump sucks',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 1
    }, {
      title: 'North Carolina tour',
      longitude: locations.raleigh.longitude,
      latitude: locations.raleigh.latitude,
      description: 'You tried the best. Now try the rest.',
      startAt: new Date('Jan 3 2018'),
      endAt: new Date('Jan 4 2018'),
      authorId: 2
    }, {
      title: 'Volunteer at homeless shelter in Texas',
      longitude: locations.houston.longitude,
      latitude: locations.houston.latitude,
      description: 'Do something nice',
      startAt: new Date('Jan 10 2018'),
      endAt: new Date('Jan 20 2018'),
      authorId: 2
    }, {
      title: 'Stalk Hollywood celebrities',
      longitude: locations.losAngeles.longitude,
      latitude: locations.losAngeles.latitude,
      description: 'I hear Scarlett Johanson will be getting some starbucks',
      startAt: new Date('Jan 1 2018'),
      endAt: new Date('Jan 2 2018'),
      authorId: 6
    }], { individualHooks: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null);
  }
};
