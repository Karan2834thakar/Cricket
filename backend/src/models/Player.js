const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    matches: { type: Number, default: 0 },
    runs: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    battingAverage: { type: Number, default: 0 },
    bowlingAverage: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
