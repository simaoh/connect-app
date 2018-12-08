
const geoJsonMixins = {};

geoJsonMixins.geoJsonFromCoordinates = function() {
  return {
    type: 'Point',
    coordinates: [this.longitude, this.latitude],
    crs: { type: 'name', properties: { name: 'EPSG:4326'} }
  };
};

geoJsonMixins.geoFromGeomPoint = function () {
  const geoJSON = {
    type: this.geopoint.type,
    coordinates: this.geopoint.coordinates
  }

  return `ST_GeomFromGeoJSON('${JSON.stringify(geoJSON)}')::geography`;
};

module.exports = geoJsonMixins;