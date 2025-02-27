import { useState, useEffect } from "react";
import axios from "axios";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [formData, setFormData] = useState({ name: "", location: "", startDate: "", endDate: "" });

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    const res = await axios.get("http://localhost:3000/api/tournaments");
    setTournaments(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/tournaments", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Tournament Created!");
      fetchTournaments();
    } catch (error) {
      alert("Error creating tournament");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl text-white font-bold mb-4">Tournaments</h2>

      {/* Create Tournament Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
        <input type="text" name="name" placeholder="Tournament Name" onChange={handleChange} required className="border p-2 w-full mb-2"/>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required className="border p-2 w-full mb-2"/>
        <input type="date" name="startDate" onChange={handleChange} required className="border p-2 w-full mb-2"/>
        <input type="date" name="endDate" onChange={handleChange} required className="border p-2 w-full mb-4"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Tournament</button>
      </form>

      {/* Tournament List */}
      <div>
        {tournaments.map((tournament) => (
          <div key={tournament._id} className="bg-gray-100 p-4 rounded mb-2">
            <h3 className="text-xl font-semibold">{tournament.name}</h3>
            <p>{tournament.location} | {new Date(tournament.startDate).toDateString()} - {new Date(tournament.endDate).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
