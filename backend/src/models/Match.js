const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: "Tournament", required: true },
    teamA: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    teamB: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    matchDate: { type: Date, required: true },
    venue: { type: String, required: true },
    status: { type: String, enum: ["scheduled", "ongoing", "completed"], default: "scheduled" },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: "Team", default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
