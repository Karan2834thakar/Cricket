const express = require("express");
const { addPlayer, getPlayersByTeam } = require("../controllers/playerController");

const router = express.Router();

router.post("/", addPlayer);
router.get("/:teamId", getPlayersByTeam);

module.exports = router;
