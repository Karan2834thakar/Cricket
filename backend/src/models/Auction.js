const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema(
  {
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: "Tournament", required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    bidAmount: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Team Owner
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auction", auctionSchema);
