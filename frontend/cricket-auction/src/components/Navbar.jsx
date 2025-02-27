import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-blue-950 text-white p-11">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-6xl font-bold">Cricket Tournament</h1>
        <ul className=" text-2xl flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/auction" className="hover:text-gray-300">Auction</Link>
          </li>
          <li>
            <Link to="/matches" className="hover:text-gray-300">Matches</Link>
          </li>
          <li>
            <Link to="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
          </li>
          <li>
          {user ? (
            <>
              <button onClick={logout} className="hover:text-gray-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300 mr-5">Login</Link>
              <Link to="/signup" className="hover:text-gray-300">Signup</Link>
            </>
          )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
