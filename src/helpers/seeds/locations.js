const modelUtils = require('../postGisHelper');

const locations = {
  manhattan    : {longitude: 40.714673488595935, latitude: -74.00453321635725},
  brooklyn     : {longitude: 40.64977817702309, latitude: -73.9482879638672},
  queens       : {longitude: 40.68193981454855, latitude: -73.8329315185547},
  philadelphia : {longitude: 39.9526, latitude: -75.1652},
  washingtonDC : {longitude: 38.9072, latitude: -77.0369},
  raleigh      : {longitude: 35.7796, latitude: -78.6382},
  houston      : {longitude: 29.7604, latitude: -95.3698},
  losAngeles   : {longitude: 34.0522, latitude: -118.2437},
};

module.exports = locations;