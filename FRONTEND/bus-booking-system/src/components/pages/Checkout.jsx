import { useLocation, Link } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();

  const seats = location.state?.seats || [];
  const total = location.state?.total || 0;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-4">
          Checkout
        </h1>

        <p className="mb-3">
          Selected Seats:
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {seats.map((seat) => (
            <span
              key={seat}
              className="bg-blue-100 px-3 py-1 rounded-full"
            >
              {seat}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-green-600 mb-6">
          KES {total}
        </h2>

        <Link
          to="/payment"
          className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Proceed to Payment
        </Link>

      </div>
    </div>
  );
};

export default Checkout;