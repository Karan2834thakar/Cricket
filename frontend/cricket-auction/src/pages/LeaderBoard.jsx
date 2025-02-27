import { useState } from "react";

const teamsData = [
  { id: 1, name: "Mumbai Indians", played: 5, won: 4, lost: 1, points: 8 },
  { id: 2, name: "Chennai Super Kings", played: 5, won: 3, lost: 2, points: 6 },
  { id: 3, name: "Royal Challengers Bangalore", played: 5, won: 3, lost: 2, points: 6 },
  { id: 4, name: "Kolkata Knight Riders", played: 5, won: 2, lost: 3, points: 4 },
  { id: 5, name: "Delhi Capitals", played: 5, won: 1, lost: 4, points: 2 },
];

export default function LeaderBoard() {
  const [teams, setTeams] = useState(teamsData);

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Leaderboard</h1>

      <div className="w-full max-w-3xl bg-blue-400 p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2 border border-gray-300">Rank</th>
              <th className="p-2 border border-gray-300">Team</th>
              <th className="p-2 border border-gray-300">Played</th>
              <th className="p-2 border border-gray-300">Won</th>
              <th className="p-2 border border-gray-300">Lost</th>
              <th className="p-2 border border-gray-300">Points</th>
            </tr>
          </thead>
          <tbody>
            {teams
              .sort((a, b) => b.points - a.points)
              .map((team, index) => (
                <tr key={team.id} className="text-center border border-gray-300">
                  <td className="p-2 border border-gray-300">{index + 1}</td>
                  <td className="p-2 border border-gray-300 font-bold">{team.name}</td>
                  <td className="p-2 border border-gray-300">{team.played}</td>
                  <td className="p-2 border border-gray-300">{team.won}</td>
                  <td className="p-2 border border-gray-300">{team.lost}</td>
                  <td className="p-2 border border-gray-300 font-bold text-red-600">{team.points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
