const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const StarWars = require("./models/starWars");

app.get("/", function (request, response) {
  response.json("You are looking at the root!");
});

app.get("/StarWars", async function (request, response) {
  const starWarsCharacters = await StarWars.find(request.query);
  response.json(starWarsCharacters);
});

app.post("/starWarsCharacters", async function (request, response) {
  const newStarWars = await StarWars.create(request.body);
  response.json(newStarWars);
});

app.delete("/StarWars/:id", async function (request, response) {
  const deletedStarWars = await StarWars.findByIdAndDelete(request.params.id);
  response.json(deletedStarWars);
});
app.listen(PORT, () => console.log("App is listening to PORT " + PORT));
