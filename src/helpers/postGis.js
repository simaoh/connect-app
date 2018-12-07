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


module.exports = postGis;