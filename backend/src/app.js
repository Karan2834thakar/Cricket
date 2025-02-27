const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const cors = require('cors');
const app = express();

const connectTODb=require('./config/db');
const authRoutes=require('./routes/authRoutes');
const protectRoutes=require('./routes/protectedRoutes');
const tournamentRoutes = require("./routes/tournamentRoutes");
const auctionRoutes = require("./routes/auctionRoutes");
const matchRoutes = require("./routes/matchRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const playerRoutes = require("./routes/playerRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");

connectTODb();
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/auction", auctionRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/leaderboard", leaderboardRoutes);


app.get('/', (req, res) => {
    res.send('cricket auction application is running');
});


module.exports = app;