const Leaderboard = require("../models/Leaderboard");

// Get Leaderboard Rankings
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().populate("team", "name").sort({ wins: -1, netRunRate: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update Leaderboard (After Match)
exports.updateLeaderboard = async (req, res) => {
  try {
    const { teamId, result, netRunRate } = req.body;

    let teamStats = await Leaderboard.findOne({ team: teamId });

    if (!teamStats) {
      teamStats = new Leaderboard({ team: teamId, matchesPlayed: 0, wins: 0, losses: 0, netRunRate: 0 });
    }

    teamStats.matchesPlayed += 1;
    if (result === "win") {
      teamStats.wins += 1;
    } else {
      teamStats.losses += 1;
    }
    teamStats.netRunRate = ((teamStats.netRunRate + netRunRate) / 2).toFixed(2);

    await teamStats.save();
    res.json({ message: "Leaderboard updated successfully", leaderboard: teamStats });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
