'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Events',
      'location',
      Sequelize.STRING
    ).then(() => {
      return queryInterface.addColumn(
        'Events',
        'description',
        Sequelize.TEXT
      );
    }).then(() => {
      return queryInterface.addColumn(
        'Events',
        'startAt',
        Sequelize.DATE
      )
    }).then(() => {
      return queryInterface.addColumn(
        'Events',
        'endAt',
        Sequelize.DATE
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Events', 'location').then(() => {
      return queryInterface.removeColumn('Events', 'description')
    }).then(() => {
      return queryInterface.removeColumn('Events', 'startAt')
    }).then(() => {
      return queryInterface.removeColumn('Events', 'endAt')
    });
  }
};
