const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
});

module.exports = mongoose.model("Tournament", tournamentSchema);
