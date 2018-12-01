'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'events',
      'location',
      Sequelize.STRING
    ).then(() => {
      return queryInterface.addColumn(
        'events',
        'description',
        Sequelize.TEXT
      );
    }).then(() => {
      return queryInterface.addColumn(
        'events',
        'startAt',
        Sequelize.DATE
      )
    }).then(() => {
      return queryInterface.addColumn(
        'events',
        'endAt',
        Sequelize.DATE
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('events', 'location').then(() => {
      return queryInterface.removeColumn('events', 'description')
    }).then(() => {
      return queryInterface.removeColumn('events', 'startAt')
    }).then(() => {
      return queryInterface.removeColumn('events', 'endAt')
    });
  }
};
