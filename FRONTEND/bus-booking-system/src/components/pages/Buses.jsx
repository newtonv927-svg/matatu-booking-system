import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { busAPI } from "../../services/api";
import busesData from "../../data/buses";

const placeholderImage = "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=80";

export default function Buses() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await busAPI.getAllBuses();
        setBuses(response.data);
      } catch (error) {
        toast.error("Failed to load buses — using local data");
        console.error(error);
        setBuses(busesData);
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
              className="group bg-white rounded-[32px] shadow-2xl hover:shadow-3xl transition duration-300 overflow-hidden border border-slate-200"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={bus.image || placeholderImage}
                  alt={bus.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = placeholderImage;
                  }}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-200">{bus.route}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-950">
                  {bus.name}
                </h2>

                <div className="mt-4 grid gap-4">
                  <div className="grid grid-cols-3 gap-3 rounded-3xl bg-slate-100/90 p-4 text-sm text-slate-700">
                    <div className="space-y-1">
                      <p className="uppercase tracking-[0.24em] text-[0.67rem] text-slate-500">Departure</p>
                      <p className="font-semibold text-slate-950">{bus.departure || "--:--"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="uppercase tracking-[0.24em] text-[0.67rem] text-slate-500">Seats left</p>
                      <p className="font-semibold text-slate-950">{bus.availableSeats ?? "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="uppercase tracking-[0.24em] text-[0.67rem] text-slate-500">Bus type</p>
                      <p className="font-semibold text-slate-950">{bus.type || "Standard"}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-0">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.24em]">Fare</p>
                      <p className="text-2xl font-semibold text-slate-950">KES {bus.fare || bus.price}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      {bus.availableSeats ?? bus.seats ?? 0} seats left
                    </div>
                  </div>
                </div>

                <Link
                  to={`/bus/${bus.id}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
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