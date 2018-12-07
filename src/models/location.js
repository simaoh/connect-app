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
      coordinates: [location.longitude, location.latitude],
      crs: { type: 'name', properties: { name: 'EPSG:4326'} }
    };
  });

  Location.prototype.toGeography = function () {
    const geoJSON = {
      type: this.position.type,
      coordinates: this.position.coordinates
    }

    return `ST_GeomFromGeoJSON('${JSON.stringify(geoJSON)}')::geography`;
  };

  Location.prototype.distanceTo = function (anotherLocation) {
    if (!anotherLocation instanceof Location) {
      console.log('must be a location object');
      return;
    }

    return sequelize.query(`
      SELECT ST_Distance(
        ${this.toGeography()},
        ${anotherLocation.toGeography()}
      );
   `).then(result => {
      return result[0][0].st_distance/1000;
    });
  }

  return Location
};
