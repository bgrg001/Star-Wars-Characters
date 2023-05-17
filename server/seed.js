const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const starWars = require("./models/starWars");

async function seed() {
  await starWars.create({
    name: "Luke Skywalker",
    weaponOfChoice: "Blue lightsaber",
    forcePowers: 88,
    honour: 84,
    anger: 16,
  });
  await starWars.create({
    name: "Rey",
    weaponOfChoice: "Blue Lightsaber",
    forcePowers: 85,
    honour: 90,
    anger: 10,
  });
  await starWars.create({
    name: "Darth Vader",
    weaponOfChoice: "Red Lightsaber",
    forcePowers: 90,
    honour: 18,
    anger: 92,
  });
  await starWars.create({
    name: "Mace Windoo",
    weaponOfChoice: "Purple Lightsaber",
    forcePowers: 90,
    honour: 92,
    anger: 8,
  });
  await starWars.create({
    name: "Darth Sidious",
    weaponOfChoice: "Red Lightsaber",
    forcePowers: 94,
    honour: 0,
    anger: 100,
  });

  await starWars.create({
    name: "Master Yoda",
    weaponOfChoice: "Green Lightsaber",
    forcePowers: 95,
    honour: 95,
    anger: 5,
  });
}
seed();
