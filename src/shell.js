const models = require('./models');
const app = require('./router');
const Sequelize = require('sequelize');
const sequelize = models.sequelize;

Promise.all([
  models.Event.findByPk(1),
  models.Event.findByPk(2),
]).then(events => {
  return events[0].distanceTo(events[1])
}).then(console.log);

// models.Location.findByPk(1).then(location => {
//   location.locationsWithinDistance(20000).then(result => {
//     console.log(result.map(l => l.dataValues));
//   });
// });

