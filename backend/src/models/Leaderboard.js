const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema(
  {
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    matchesPlayed: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    netRunRate: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Leaderboard", leaderboardSchema);
