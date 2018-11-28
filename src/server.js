const models = require('./models');

models.User.findById(1).then(user => {
  console.log(user.dataValues)
});