const models = require('../models');

const postGisHelper = {};

postGisHelper.distanceBetween = function(location1, location2) {
  if (!_isGeoModel(location1) || !_isGeoModel(location2)) {
    throw new Error('postGis.distanceBetween() must be called with models with geo properties');
  }

  return models.sequelize.query(`
    SELECT ST_Distance(
      ${location1.getLocationGeo()},
      ${location2.getLocationGeo()}
    );
 `, {
    type: models.sequelize.QueryTypes.SELECT
  }).then(result => {
    return result[0].st_distance/1000;
  });
};

postGisHelper.nearbyEvents = function(location, distanceMeters) {
  if (!_isGeoModel(location)) {
    throw new Error('postGis.nearbyEvents() must be called with a model with geo properties');
  }

  return models.sequelize.query(`
      SELECT *
      FROM events
      WHERE ST_DWithin(
        geopoint,
        ${location.getLocationGeo()},
        ${distanceMeters}
      );
    `, {
    type: models.sequelize.QueryTypes.SELECT,
    model: models.Event
  });
};

module.exports = postGisHelper;

function _isGeoModel (model) {
  return (
    model.getLocationGeo instanceof Function &&
    model.dataValues.hasOwnProperty('latitude') &&
    model.dataValues.hasOwnProperty('longitude') &&
    model.dataValues.hasOwnProperty('geopoint')
  );
};