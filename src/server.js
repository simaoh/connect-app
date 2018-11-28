const models = require('./models');
const app = require('./router');

const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running on port %d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = server;