import { useState } from "react";

const matchData = [
  { id: 1, teamA: "Mumbai Indians", teamB: "Chennai Super Kings", date: "2025-03-10", status: "Upcoming", score: "" },
  { id: 2, teamA: "Royal Challengers Bangalore", teamB: "Kolkata Knight Riders", date: "2025-03-08", status: "Completed", score: "RCB 180/6 - KKR 175/8" },
  { id: 3, teamA: "Delhi Capitals", teamB: "Sunrisers Hyderabad", date: "2025-03-12", status: "Upcoming", score: "" },
  { id: 4, teamA: "Punjab Kings", teamB: "Rajasthan Royals", date: "2025-03-07", status: "Completed", score: "PBKS 150/7 - RR 152/5" },
];

export default function Matches() {
  const [matches, setMatches] = useState(matchData);

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Match Schedule</h1>

      <div className="w-full max-w-4xl bg-blue-400 p-6 rounded-lg shadow-md">
        {matches.map((match) => (
          <div key={match.id} className="border-b p-4">
            <h3 className="text-xl font-bold">{match.teamA} vs {match.teamB}</h3>
            <p className="text-gray-600">Date: {match.date}</p>
            <p className={`font-semibold ${match.status === "Upcoming" ? "text-orange-500" : "text-green-600"}`}>
              {match.status} {match.status === "Completed" && ` - ${match.score}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
