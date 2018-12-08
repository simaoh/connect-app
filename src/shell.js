const models = require('./models');
const app = require('./router');
const postGisHelper = require('./helpers/postGis');

Promise.all([
  models.Event.findByPk(1),
  models.Event.findByPk(2),
]).then(events => {
  return postGisHelper.distanceBetween(events[0], events[1]);
}).then(console.log);

// models.Location.findByPk(1).then(location => {
//   location.locationsWithinDistance(20000).then(result => {
//     console.log(result.map(l => l.dataValues));
//   });
// });

// console.log (models.sequelize.query)