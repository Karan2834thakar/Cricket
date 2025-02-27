const Score = require("../models/Score");

// Update Match Score
exports.updateScore = async (req, res) => {
  try {
    const { matchId, teamId, runs, wickets, overs } = req.body;
    const io = req.app.get("io");

    const score = await Score.findOneAndUpdate(
      { match: matchId, team: teamId },
      { runs, wickets, overs },
      { new: true, upsert: true }
    );
    io.emit("scoreUpdate", { matchId, teamId, runs, wickets, overs });
    res.json({ message: "Score updated successfully", score });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get Scores for a Match
exports.getScores = async (req, res) => {
  try {
    const { matchId } = req.params;

    const scores = await Score.find({ match: matchId }).populate("team", "name");
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
