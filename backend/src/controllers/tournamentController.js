const Tournament = require("../models/Tournament");

// Create Tournament
exports.createTournament = async (req, res) => {
  try {
    const { name, location, startDate, endDate } = req.body;

    const newTournament = new Tournament({
      name,
      location,
      startDate,
      endDate,
    });

    await newTournament.save();
    res.status(201).json({ message: "Tournament created successfully", tournament: newTournament });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get All Tournaments
exports.getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
