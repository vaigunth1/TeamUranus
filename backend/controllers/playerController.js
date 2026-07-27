import Player from "../models/Player.js";

// Get Players
export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();

    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add Player
export const addPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);

    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Player
export const deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id);

    res.json({
      message: "Player Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};