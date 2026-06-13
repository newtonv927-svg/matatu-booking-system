import { useLocation, Link } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();

  const seats = location.state?.seats || [];
  const total = location.state?.total || 0;
  const bus = location.state?.bus;

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4 py-10">
      <div className="bg-white p-10 rounded-[32px] shadow-2xl w-full max-w-xl border border-slate-200">

        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          Checkout
        </h1>

        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 mb-6">
          <p className="text-sm text-slate-500">Bus</p>
          <p className="text-xl font-semibold text-slate-900">{bus?.name || "N/A"}</p>
          <p className="text-sm text-slate-500 mt-4">Route</p>
          <p className="text-lg text-slate-700">{bus?.route || "N/A"}</p>
        </div>

        <p className="mb-3">
          Bus: {bus?.name || "Unknown bus"}
        </p>

        <p className="mb-3">
          Selected Seats:
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {seats.map((seat) => (
            <span
              key={seat}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold"
            >
              Seat {seat}
            </span>
          ))}
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 p-6 mb-6">
          <p className="text-sm text-slate-500">Total Payment</p>
          <p className="text-3xl font-bold text-indigo-600">KES {total.toLocaleString()}</p>
        </div>

        <Link
          to="/payment"
          state={{ seats, total, bus: location.state?.bus }}
          className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Proceed to Payment
        </Link>

      </div>
    </div>
  );
};

export default Checkout;