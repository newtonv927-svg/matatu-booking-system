import { useParams } from "react-router-dom";
import buses from "../../data/buses";

function BusDetails() {
  const { id } = useParams();

  const bus = buses.find((b) => b.id === parseInt(id));

  if (!bus) {
    return (
      <div className="text-white text-center mt-20 text-3xl">
        Bus Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{bus.name}</h1>

        <p className="text-xl mb-3">
          Route: {bus.route}
        </p>

        <p className="text-2xl font-semibold text-green-400">
          Ksh {bus.fare}
        </p>

        <button className="mt-6 w-full bg-green-500 hover:bg-green-600 transition-all duration-300 py-3 rounded-xl text-lg font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BusDetails;