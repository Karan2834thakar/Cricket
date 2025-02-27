const Auction = require("../models/Auction");
const Tournament = require("../models/Tournament");

// Place a Bid
exports.placeBid = async (req, res) => {
  try {
    const { tournamentId, teamId, bidAmount } = req.body;
    const userId = req.user.id;

    const auctionBid = new Auction({
      tournament: tournamentId,
      team: teamId,
      bidAmount,
      owner: userId,
    });

    await auctionBid.save();
    res.status(201).json({ message: "Bid placed successfully", auction: auctionBid });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get Bids for a Tournament
exports.getBids = async (req, res) => {
  try {
    const { tournamentId } = req.params;

    const bids = await Auction.find({ tournament: tournamentId }).populate("team owner", "name email");
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
