const app = require('./app');

app.get("/", (req, res) => {
  res.send("OK!\n");
});

module.exports = app;