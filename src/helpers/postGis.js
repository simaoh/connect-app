const sequelize = require('../models').sequelize;

const postGis = {};

postGis.geoJsonFromCoordinates = function(longitude, latitude) {
  return {
    type: 'Point',
    coordinates: [longitude, latitude],
    crs: { type: 'name', properties: { name: 'EPSG:4326'} }
  };
};

postGis.geoJsonFromCoordinatesObj = function(coordsObj) {
  return postGis.geoJsonFromCoordinates(coordsObj.longitude, coordsObj.latitude);
};

postGis.distanceBetween = function(location1, location2) {
  return sequelize.query(`
    SELECT ST_Distance(
      ${location1.getLocationGeo()},
      ${location2.getLocationGeo()}
    );
 `, {
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    return result[0].st_distance/1000;
  });
}

module.exports = postGis;