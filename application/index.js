const App = require("./app");
const configLoader = require("./configLoader");

module.exports.App = App
module.exports.configLoader = new configLoader();