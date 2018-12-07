const utils = {};

utils.geoJsonFromCoordinates = function(longitude, latitude) {
  return {
    type: 'Point',
    coordinates: [longitude, latitude],
    crs: { type: 'name', properties: { name: 'EPSG:4326'} }
  };
};

utils.geoJsonFromCoordinatesObj = function(coordsObj) {
  return utils.geoJsonFromCoordinates(coordsObj.longitude, coordsObj.latitude);
};


module.exports = utils;