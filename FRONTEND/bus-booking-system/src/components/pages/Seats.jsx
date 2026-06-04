import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Seats = () => {
  const navigate = useNavigate();

  const seatNumbers = Array.from({ length: 40 }, (_, i) => i + 1);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
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

    navigate("/checkout", {
      state: {
        seats: selectedSeats,
        total: selectedSeats.length * 1500,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Select Your Seat
        </h1>

        {/* Bus Screen */}
        <div className="bg-gray-800 text-white text-center py-3 rounded-t-xl mb-6">
          Driver
        </div>

        {/* Seats Grid */}
        <div className="bg-white p-6 rounded-xl shadow-lg">

          <div className="grid grid-cols-4 gap-4">

            {seatNumbers.map((seat) => (
              <button
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`h-14 rounded-lg font-bold transition-all duration-300

                ${
                  selectedSeats.includes(seat)
                    ? "bg-green-600 text-white scale-105"
                    : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                }
                `}
              >
                {seat}
              </button>
            ))}

          </div>

        </div>

        {/* Selected Seats */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-4">
            Selected Seats
          </h2>

          {selectedSeats.length === 0 ? (
            <p className="text-gray-500">
              No seats selected
            </p>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSeats.map((seat) => (
                  <span
                    key={seat}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                  >
                    Seat {seat}
                  </span>
                ))}
              </div>

              <p className="text-lg font-medium">
                Seats Selected: {selectedSeats.length}
              </p>

              <p className="text-xl font-bold text-blue-600 mt-2">
                Total: KES {selectedSeats.length * 1500}
              </p>
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
  );
};

export default Seats;