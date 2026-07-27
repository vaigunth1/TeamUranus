import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Player from "./models/Player.js";

dotenv.config();

const seedPlayers = async () => {
  try {
    await connectDB();

    // Remove old data
    await Player.deleteMany();

    // Insert new data
    await Player.insertMany([
      {
        name: "VASANTH",
        name2: "URNS KIRA",
        role: "Founder & Owner",
        badge: "",
        category: "Founder",
        image: "kira.jpeg",
      },
      {
        name: "JEEVA",
        name2: "URNS MADDY",
        role: "Guild Manager",
        badge: "",
        category: "Manager",
        image: "maddy.jpeg",
      },
      {
        name: "VAIGU",
        name2: "URNS DRACO",
        role: "Esports Manager",
        badge: "",
        category: "Manager",
        image: "draco.jpeg",
      },
      {
        name: "URNS DRACO",
        name2: "",
        role: "Captain • IGL",
        badge: "TEAM LEADER",
        category: "Player",
        image: "draco.jpeg",
      },
      {
        name: "URNS SHAMEER",
        name2: "",
        role: "Rusher",
        badge: "ENTRY FRAGGER",
        category: "Player",
        image: "suk.jpeg",
      },
      {
        name: "URNS PRINCE",
        name2: "",
        role: "Sniper",
        badge: "SHARPSHOOTER",
        category: "Player",
        image: "prince.jpeg",
      },
      {
        name: "URNS ZETA",
        name2: "",
        role: "Support",
        badge: "TACTICAL",
        category: "Player",
        image: "zeta.jpeg",
      },
      {
        name: "URNS ZENIN",
        name2: "",
        role: "Nader",
        badge: "BACKBONE",
        category: "Player",
        image: "zenin.jpeg",
      },
    ]);

    console.log("✅ Team Uranus members inserted successfully!");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedPlayers();