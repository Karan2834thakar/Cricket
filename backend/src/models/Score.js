const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    match: { type: mongoose.Schema.Types.ObjectId, ref: "Match", required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    runs: { type: Number, required: true, default: 0 },
    wickets: { type: Number, required: true, default: 0 },
    overs: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", scoreSchema);
