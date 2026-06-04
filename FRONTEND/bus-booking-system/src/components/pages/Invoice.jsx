export default function Invoice() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl text-green-600">
          Booking Successful
        </h1>

        <p>Invoice Number: INV-001</p>

        <p>Status: Paid</p>
      </div>
    </div>
  );
}