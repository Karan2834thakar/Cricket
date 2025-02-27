const express = require("express");
const { updateScore, getScores } = require("../controllers/scoreController");
const authMiddleware = require("../middelware/authmiddelware");

const router = express.Router();

router.post("/update", authMiddleware, updateScore);
router.get("/:matchId", getScores);

module.exports = router;
