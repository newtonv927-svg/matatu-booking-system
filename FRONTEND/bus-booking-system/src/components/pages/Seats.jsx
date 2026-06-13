import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { busAPI } from "../../services/api";
import busesData from "../../data/buses";

const Seats = () => {
  const navigate = useNavigate();

  const seatNumbers = Array.from({ length: 40 }, (_, i) => i + 1);
  
  // Booked seats (already reserved by other passengers)
  const bookedSeats = [2, 5, 8, 12, 15, 18, 22, 25, 28, 32, 35, 38];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bus, setBus] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const res = await busAPI.getBusById(id);
        setBus(res.data);
      } catch {
        const local = busesData.find((b) => String(b.id) === String(id));
        setBus(local || null);
      }
    };

    fetchBus();
  }, [id]);

  const toggleSeat = (seat) => {
    // Prevent selecting booked seats
    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleCheckout = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    const fare = bus?.fare || bus?.price || 1500;

    navigate("/checkout", {
      state: {
        seats: selectedSeats,
        total: selectedSeats.length * fare,
        bus,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="rounded-[32px] bg-white shadow-2xl p-8 mb-10 border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Select Your Seat</h1>
              <p className="mt-2 text-slate-600">Choose the best seat and continue to a secure checkout.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Route</p>
              <p className="text-lg font-semibold text-slate-900">{bus?.route || "Loading..."}</p>
              <p className="text-sm text-slate-500 mt-2">Fare per seat</p>
              <p className="text-xl font-semibold text-indigo-600">KES {bus?.fare || bus?.price || 1500}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-slate-200">

        {/* Bus Screen */}
        <div className="bg-gray-800 text-white text-center py-3 rounded-t-xl mb-6">
          Driver
        </div>

        {/* Seats Grid */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6 flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
              <span className="text-sm font-medium text-gray-700">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-600 rounded-lg border-2 border-green-700"></div>
              <span className="text-sm font-medium text-gray-700">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-lg border-2 border-red-600 cursor-not-allowed"></div>
              <span className="text-sm font-medium text-gray-700">Booked</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-8">

            {seatNumbers.map((seat) => (
              <button
                key={seat}
                onClick={() => toggleSeat(seat)}
                disabled={bookedSeats.includes(seat)}
                className={`h-12 w-12 rounded-lg font-bold transition-all duration-300 border-2

                ${
                  bookedSeats.includes(seat)
                    ? "bg-red-500 border-red-600 text-white cursor-not-allowed opacity-75"
                    : selectedSeats.includes(seat)
                    ? "bg-green-600 border-green-700 text-white scale-105 shadow-lg"
                    : "bg-gray-200 border-gray-300 text-gray-800 hover:bg-blue-500 hover:border-blue-600 hover:text-white cursor-pointer"
                }
                `}
              >
                {seat}
              </button>
            ))}

          </div>

        </div>

        {/* Selected Seats */}
        <div className="mt-8 bg-slate-50 p-6 rounded-3xl border border-slate-200">

          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            Selected Seats
          </h2>

          {selectedSeats.length === 0 ? (
            <p className="text-gray-400 text-center py-4 italic">
              No seats selected yet. Choose your seat above.
            </p>
          ) : (
            <>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedSeats.map((seat) => (
                  <span
                    key={seat}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold border-2 border-green-300"
                  >
                    Seat {seat}
                  </span>
                ))}
              </div>

              <div className="border-t-2 border-gray-200 pt-4">
                <p className="text-lg font-medium text-gray-700">
                  Total Seats: <span className="text-blue-600 font-bold">{selectedSeats.length}</span>
                </p>

                <p className="text-2xl font-bold text-indigo-600 mt-3">
                  Total Price: KES {((selectedSeats.length) * (bus?.fare || bus?.price || 1500)).toLocaleString()}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Checkout Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleCheckout}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Continue to Checkout
          </button>
        </div>

      </div>
    </div>
  </div>
  );
}
export default Seats;