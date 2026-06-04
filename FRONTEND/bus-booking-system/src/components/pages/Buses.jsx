import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { busAPI } from "../../services/api";

export default function Buses() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await busAPI.getAllBuses();
        setBuses(response.data);
      } catch (error) {
        toast.error("Failed to load buses");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Available Buses
      </h1>

      {loading ? (
        <div className="text-center text-xl">Loading buses...</div>
      ) : buses.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No buses available at the moment
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buses.map((bus) => (
            <div
              key={bus.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {bus.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {bus.route}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Departure: {bus.departure}
                </p>

                <p className="text-blue-600 font-bold text-xl mt-4">
                  KES {bus.price}
                </p>

                <Link
                  to={`/bus/${bus.id}`}
                  className="mt-5 block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}