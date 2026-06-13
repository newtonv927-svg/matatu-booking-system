import { useNavigate, useLocation } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const location = useLocation();
  const seats = location.state?.seats || [];
  const total = location.state?.total || 0;
  const bus = location.state?.bus;

  const payNow = () => {
    alert("Payment Successful");
    navigate("/invoice", { state: { seats, total, bus } });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4 py-10">
      <div className="bg-white p-10 rounded-[32px] shadow-2xl w-full max-w-md border border-slate-200">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">
          MPESA Payment
        </h1>

        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 mb-6">
          <p className="text-sm text-slate-500">Bus</p>
          <p className="text-lg font-semibold text-slate-900">{bus?.name || "-"}</p>
          <p className="text-sm text-slate-500 mt-3">Seats</p>
          <p className="text-base text-slate-700">{seats.join(", ") || "-"}</p>
          <p className="text-sm text-slate-500 mt-3">Total</p>
          <p className="text-2xl font-bold text-indigo-600">KES {total.toLocaleString()}</p>
        </div>

        <input
          type="text"
          placeholder="2547XXXXXXXX"
          className="w-full border border-slate-300 p-3 rounded-3xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={payNow}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3 rounded-3xl font-semibold shadow-lg hover:opacity-95 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}