import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { busAPI } from "../../services/api";

export default function BusDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await busAPI.getBusById(id);
        setBus(response.data);
      } catch {
        toast.error("Failed to load bus details");
        navigate("/buses");
      } finally {
        setLoading(false);
      }
    };

    fetchBusDetails();
  }, [id, navigate]);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  if (!bus) {
    return <div className="min-h-screen flex justify-center items-center">Bus not found</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-xl p-10 rounded-3xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">
          {bus.name}
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          Route: {bus.route}
        </p>

        <p className="text-lg text-gray-600 mb-4">
          Departure: {bus.departure}
        </p>

        <p className="text-3xl font-bold text-green-600 mb-8">
          KES {bus.price}
        </p>

        <Link
          to={`/seats/${id}`}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl mt-6 inline-block hover:bg-blue-600"
        >
          Select Seat
        </Link>
      </div>
    </div>
  );
}