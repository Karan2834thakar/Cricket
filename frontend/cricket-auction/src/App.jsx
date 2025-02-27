import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auction from "./pages/Auction";
import Matches from "./pages/Matches";
import Leaderboard from "./pages/LeaderBoard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Tournaments from "./pages/Tournaments";


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      

      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/auction" element={<PrivateRoute><Auction /></PrivateRoute>} />
        <Route path="/matches" element={<PrivateRoute><Matches /></PrivateRoute>} />
        <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
        <Route path="/tournaments" element={<PrivateRoute><Tournaments /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
