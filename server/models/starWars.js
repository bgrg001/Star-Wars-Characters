const mongoose = require("mongoose");

const { Schema } = mongoose;

const starWarsSchema = new Schema({
  name: String,
  choiceOfWeapon: String,
  forcePowers: Number,
  honour: Number,
  anger: Number,
});

const StarWars = mongoose.model("starWars", starWarsSchema);

module.exports = StarWars;
