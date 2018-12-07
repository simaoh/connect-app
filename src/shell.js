const models = require('./models');
const app = require('./router');
const Sequelize = require('sequelize');
const sequelize = models.sequelize;

// Promise.all([
//   models.Location.findByPk(1),
//   models.Location.findByPk(2),
// ]).then(positions => {
//   return positions[0].distanceTo(positions[1])
// }).then(console.log);
//
// models.Location.findByPk(1).then(location => {
//   location.locationsWithinDistance(20000).then(result => {
//     console.log(result.map(l => l.dataValues));
//   });
// });
//
