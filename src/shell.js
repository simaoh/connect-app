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
