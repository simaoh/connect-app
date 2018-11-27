const models = require('./db/models');

models.User.findById(1).then(user => {
  console.log(user.dataValues)
});

models.User.create({
  firstName: 'Test',
  lastName: 'User',
  email: 'Test@demo.com'
}).then(user => console.log('Successs'));