const express = require("express");
const { createMatch, getMatches } = require("../controllers/matchController");
const authMiddleware = require("../middelware/authmiddelware");

const router = express.Router();

router.post("/", authMiddleware, createMatch);
router.get("/", getMatches);

module.exports = router;
