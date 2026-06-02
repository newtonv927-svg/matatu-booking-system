import jsPDF from "jspdf";

function Invoice() {

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.text("SUPER METRO BUS TICKET", 20, 20);

    doc.text("Passenger Ticket Invoice", 20, 40);

    doc.text("Thank you for booking with us.", 20, 60);

    doc.save("ticket.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center max-w-xl w-full">

        <h1 className="text-4xl font-bold text-white mb-6">
          Booking Successful
        </h1>

        <p className="text-gray-300 mb-8">
          Your bus ticket has been confirmed.
        </p>

        <button
          onClick={downloadPDF}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
        >
          Download Invoice
        </button>

      </div>

    </div>
  );
}

export default Invoice;