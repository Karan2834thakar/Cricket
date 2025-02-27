import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" h-screen  flex flex-col items-center justify-center bg-blue-900 ">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to Cricket Auction & Tournament
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Participate in live auctions, manage teams, track match schedules, and follow live scores!
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/auction" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700">
            Start Auction
          </Link>
          <Link to="/matches" className="bg-gray-700 text-white px-6 py-2 rounded-lg text-lg shadow-md hover:bg-gray-800">
            View Matches
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12  grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <FeatureCard 
          title="Live Auctions"
          description="Bid for the best players and build your dream team."
          icon="⚡"
        />
        <FeatureCard
          title="Match Schedules"
          description="Stay updated with upcoming match schedules and fixtures."
          icon="📅"
        />
        <FeatureCard
          title="Live Scoring"
          description="Get real-time match updates and team performance stats."
          icon="🏏"
        />
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-blue-300 p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}
