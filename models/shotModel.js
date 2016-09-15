var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var shotSchema = new Schema({
  playerName: String,
  xValue: String,
  yValue: String,
  result: Boolean
});

var Shots = mongoose.model('Shots', shotSchema);

module.exports = Shots;
