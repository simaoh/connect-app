const app = require('./app');
const model = require('../models');

app.get("/am_i_alive", (req, res) => {
  res.send("OK!");
});

app.get("/api/user/:userId", (req, res) => {
  console.log(req.params.userId);
  model.User.findByPk(req.params.userId).then(user => {
    if (user) {
      res.json(user.dataValues);
    } else {
      res.status(404).send();
    }
  })
});

app.post("/api/user/", (req, res) => {
  
});

module.exports = app;