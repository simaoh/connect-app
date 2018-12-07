const models = require('./models');
const app = require('./router');
const Sequelize = require('sequelize');
const sequelize = models.sequelize;

Promise.all([
  models.Location.findByPk(1),
  models.Location.findByPk(2),
]).then(positions => {
  return positions[0].distanceTo(positions[1])
}).then(console.log);

//SELECT *
// FROM locations
// WHERE ST_DWithin(
// 	position,
// 	(SELECT position FROM locations WHERE id=1)::geography,
// 	200000
// );

// models.Location.findByPk(1).then(location => {
//   return sequelize.query(`
//     SELECT
//   `);
// });

