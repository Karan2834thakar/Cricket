import { useState } from "react";

const playersData = [
  { id: 1, name: "Virat Kohli", basePrice: 50000, highestBid: 0, highestBidder: "None" },
  { id: 2, name: "MS Dhoni", basePrice: 60000, highestBid: 0, highestBidder: "None" },
  { id: 3, name: "Rohit Sharma", basePrice: 55000, highestBid: 0, highestBidder: "None" },
];

export default function Auction() {
  const [players, setPlayers] = useState(playersData);

  const placeBid = (playerId) => {
    const bidAmount = prompt("Enter your bid amount:");
    if (!bidAmount || isNaN(bidAmount)) return;

    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId && Number(bidAmount) > player.highestBid
          ? { ...player, highestBid: Number(bidAmount), highestBidder: "You" }
          : player
      )
    );
  };

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Auction Room</h1>
      <div className="w-full max-w-4xl bg-blue-400 p-6 rounded-lg shadow-md">
        {players.map((player) => (
          <div key={player.id} className="flex justify-between items-center border-b p-4">
            <div>
              <h3 className="text-xl font-bold">{player.name}</h3>
              <p className="text-gray-600">Base Price: ₹{player.basePrice}</p>
              <p className="text-gray-700">
                Highest Bid: ₹{player.highestBid} ({player.highestBidder})
              </p>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => placeBid(player.id)}
            >
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
