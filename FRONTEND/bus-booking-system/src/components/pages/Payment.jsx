import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const payNow = () => {
    alert("Payment Successful");
    navigate("/invoice");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6">
          MPESA Payment
        </h1>

        <input
          type="text"
          placeholder="2547XXXXXXXX"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          onClick={payNow}
          className="w-full bg-green-600 text-white p-3 rounded-xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}