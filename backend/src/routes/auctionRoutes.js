const express = require("express");
const { placeBid, getBids } = require("../controllers/auctionController");
const authMiddleware = require("../middelware/authmiddelware");

const router = express.Router();

router.post("/bid", authMiddleware, placeBid);
router.get("/:tournamentId/bids", getBids);

module.exports = router;
