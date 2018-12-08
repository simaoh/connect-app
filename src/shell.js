const models = require('./models');
const app = require('./router');
const postGisHelper = require('./helpers/postGisHelper');
const assert = require('assert').strict;

Promise.all([
  models.Event.findByPk(1),
  models.Event.findByPk(2),
]).then(events => {
  return postGisHelper.distanceBetween(events[0], events[1]);
}).then(distance => assert(!!distance));

models.Event.findByPk(1).then(event => {
  return postGisHelper.nearbyEvents(event, 20000);
}).then(events => {
  assert(!!events);
});
