const express = require("express");
const Tournament = require("../models/Tournament");
const authMiddleware = require("../middelware/authmiddelware");
const router = express.Router();

// Create Tournament
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, location, startDate, endDate } = req.body;
    const tournament = new Tournament({ name, location, startDate, endDate });
    await tournament.save();
    res.status(201).json({ message: "Tournament created successfully", tournament });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get All Tournaments
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
