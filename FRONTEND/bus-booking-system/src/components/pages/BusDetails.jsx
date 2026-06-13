import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { busAPI } from "../../services/api";
import busesData from "../../data/buses";

const placeholderImage = "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=80";

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
        const localBus = busesData.find((b) => String(b.id) === String(id));
        if (localBus) {
          setBus(localBus);
        } else {
          toast.error("Failed to load bus details");
          navigate("/buses");
        }
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
    <div className="min-h-screen flex justify-center items-center p-4 bg-slate-50">
      <div className="bg-white shadow-2xl p-6 rounded-[32px] max-w-3xl w-full overflow-hidden border border-slate-200">
        <div className="h-72 w-full overflow-hidden rounded-3xl mb-6">
          <img
            src={bus.image || placeholderImage}
            alt={bus.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholderImage;
            }}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          {bus.name}
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          Route: {bus.route}
        </p>

        {bus.departure && (
          <p className="text-lg text-gray-600 mb-4">Departure: {bus.departure}</p>
        )}

        <div className="flex flex-col gap-3 mb-8">
          <p className="text-lg text-slate-600">Price: <span className="font-semibold text-slate-900">KES {bus.fare || bus.price}</span></p>
          {bus.departure && (
            <p className="text-lg text-slate-600">Departure: <span className="font-semibold text-slate-900">{bus.departure}</span></p>
          )}
        </div>

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