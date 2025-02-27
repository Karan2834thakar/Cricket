const Match = require("../models/Match");

// Create a match
exports.createMatch = async (req, res) => {
  try {
    const { tournament, teamA, teamB, matchDate, venue } = req.body;

    const newMatch = new Match({
      tournament,
      teamA,
      teamB,
      matchDate,
      venue,
    });

    await newMatch.save();
    res.status(201).json({ message: "Match scheduled successfully", match: newMatch });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all matches
exports.getMatches = async (req, res) => {
  try {
    const matches = await Match.find().populate("teamA teamB tournament", "name");
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
