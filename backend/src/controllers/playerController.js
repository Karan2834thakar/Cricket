const Player = require("../models/Player");

// Add Player
exports.addPlayer = async (req, res) => {
  try {
    const { name, team } = req.body;

    const newPlayer = new Player({
      name,
      team,
    });

    await newPlayer.save();
    res.status(201).json({ message: "Player added successfully", player: newPlayer });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get Players by Team
exports.getPlayersByTeam = async (req, res) => {
  try {
    const { teamId } = req.params;

    const players = await Player.find({ team: teamId }).populate("team", "name");
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
