'use strict';

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    position: DataTypes.GEOMETRY('POINT', 4326)
  }, {
    tableName: 'locations'
  });

  Location.addHook('beforeSave', location => {
    location.position = {
      type: 'Point',
      coordinates: [location.longitude, location.latitude]
    };
  });

  return Location
};
