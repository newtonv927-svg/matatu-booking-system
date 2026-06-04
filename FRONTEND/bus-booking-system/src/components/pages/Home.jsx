import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957')] bg-cover">
      <div className="bg-black/70 p-10 rounded-3xl text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
          Bus Booking System
        </h1>
<ul className="space-y-3">
  <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
    Nairobi → Mombasa
  </li>

  <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
    Nairobi → Kisumu
  </li>

  <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
    Nairobi → Nakuru
  </li>
</ul>
        <p className="mb-6">
          Book your next journey in seconds
        </p>

        <Link
          to="/buses"
          className="bg-yellow-500 px-8 py-4 rounded-xl"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}