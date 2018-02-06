const Datastore = require("nedb");
const path = require("path");

const model = new Datastore({
  filename: "./db/veiculos.db",
  autoload: true
});

module.exports = model;
