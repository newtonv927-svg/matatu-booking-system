import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";
import jsPDF from "jspdf";

export default function Invoice() {
  const location = useLocation();
  const receiptRef = useRef(null);
  const {
    seats = [],
    total = 0,
    bus = {},
    passengerName = "Guest",
    phone = "N/A",
    paymentTime = new Date(),
  } = location.state || {};

  // Generate receipt number from payment time
  const paymentDate = paymentTime instanceof Date ? paymentTime : new Date(paymentTime);
  const receiptNumber = `RCP-${paymentDate.getTime().toString().slice(-8)}`;

  // Format date and time
  const formatDateTime = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toLocaleString("en-KE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const paymentDateTime = formatDateTime(paymentTime);
  const departureTime = bus?.departure || "N/A";

  const downloadReceipt = async () => {
    try {
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      let yPosition = 15;
      const lineHeight = 8;
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const maxWidth = pdf.internal.pageSize.getWidth() - 2 * margin;

      // Helper function to add text and handle page breaks
      const addText = (text, fontSize, fontStyle = "normal", x = margin) => {
        pdf.setFontSize(fontSize);
        pdf.setFont(undefined, fontStyle);
        pdf.text(text, x, yPosition, { maxWidth: maxWidth - x + margin });
        yPosition += lineHeight;
        if (yPosition > pageHeight - 15) {
          pdf.addPage();
          yPosition = 15;
        }
      };

      // Title
      pdf.setFont(undefined, "bold");
      addText("BOOKING RECEIPT", 18);
      addText(`Receipt #: ${receiptNumber}`, 12);
      yPosition += 5;

      // Passenger Information
      pdf.setFont(undefined, "bold");
      addText("PASSENGER INFORMATION", 12);
      pdf.setFont(undefined, "normal");
      addText(`Name: ${passengerName}`, 11);
      addText(`Phone: ${phone}`, 11);
      yPosition += 3;

      // Journey Details
      pdf.setFont(undefined, "bold");
      addText("JOURNEY DETAILS", 12);
      pdf.setFont(undefined, "normal");
      addText(`Bus: ${bus?.name || "N/A"}`, 11);
      addText(`Type: ${bus?.type || "N/A"}`, 11);
      addText(`Route: ${bus?.route || "N/A"}`, 11);
      addText(`Departure: ${departureTime}`, 11);
      yPosition += 3;

      // Seats
      pdf.setFont(undefined, "bold");
      addText("SELECTED SEATS", 12);
      pdf.setFont(undefined, "normal");
      addText(seats.length > 0 ? `Seats: ${seats.join(", ")}` : "No seats selected", 11);
      yPosition += 3;

      // Payment Details
      pdf.setFont(undefined, "bold");
      addText("PAYMENT DETAILS", 12);
      pdf.setFont(undefined, "normal");
      addText(`Number of Seats: ${seats.length}`, 11);
      addText(`Fare per Seat: KES ${bus?.fare ? bus.fare.toLocaleString() : "0"}`, 11);
      addText(`Payment Status: PAID`, 11);
      addText(`Payment Method: M-Pesa`, 11);
      yPosition += 3;

      // Total Amount
      pdf.setFont(undefined, "bold");
      pdf.setFontSize(14);
      addText(`TOTAL AMOUNT: KES ${total.toLocaleString()}`, 14);
      yPosition += 5;

      // Date and Time
      pdf.setFont(undefined, "normal");
      pdf.setFontSize(10);
      addText(`Booking Date & Time: ${paymentDateTime}`, 10);
      yPosition += 5;

      // Footer
      pdf.setFont(undefined, "italic");
      pdf.setFontSize(9);
      addText("Please arrive 30 minutes before departure.", 9);
      addText(`Confirmation SMS sent to: ${phone}`, 9);

      pdf.save(`receipt-${receiptNumber}.pdf`);
    } catch (error) {
      console.error("Error downloading receipt:", error);
      alert("Failed to download receipt. Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Receipt Container */}
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-200">
          {/* Header with Success Message */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 text-center">
            <div className="text-4xl mb-3">✓</div>
            <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-green-100">Your booking has been confirmed</p>
          </div>

          {/* Receipt Content */}
          <div className="p-8" ref={receiptRef}>
            {/* Receipt Header */}
            <div className="border-b border-slate-200 pb-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">BOOKING RECEIPT</h2>
                  <p className="text-sm text-slate-600 mt-1">Your reservation confirmation</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-600">Receipt #</p>
                  <p className="text-lg font-bold text-indigo-600">{receiptNumber}</p>
                </div>
              </div>
            </div>

            {/* Passenger Information */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
                Passenger Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Passenger Name</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">{passengerName}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Phone Number</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">{phone}</p>
                </div>
              </div>
            </div>

            {/* Bus Information */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
                Journey Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Bus Name</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">{bus?.name || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Bus Type</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">{bus?.type || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Route</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">{bus?.route || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Departure Time</p>
                  <p className="text-lg font-semibold text-indigo-600 mt-1">{departureTime}</p>
                </div>
              </div>
            </div>

            {/* Seat Information */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
                Selected Seats
              </h3>
              <div className="flex flex-wrap gap-2">
                {seats.length > 0 ? (
                  seats.map((seat) => (
                    <span
                      key={seat}
                      className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold text-sm border-2 border-indigo-300"
                    >
                      Seat {seat}
                    </span>
                  ))
                ) : (
                  <p className="text-slate-500">No seats selected</p>
                )}
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
                Payment Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Number of Seats</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">{seats.length}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Fare per Seat</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">
                    KES {bus?.fare ? bus.fare.toLocaleString() : "0"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Payment Status</p>
                  <p className="text-lg font-semibold text-green-600 mt-1">✓ PAID</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Payment Method</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">M-Pesa</p>
                </div>
              </div>
            </div>

            {/* Total Amount */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 mb-6 text-white">
              <p className="text-sm font-semibold opacity-90">Total Amount Paid</p>
              <p className="text-4xl font-bold mt-2">KES {total.toLocaleString()}</p>
            </div>

            {/* Booking Date and Time */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6">
              <p className="text-xs text-slate-500 font-semibold">Booking Date & Time</p>
              <p className="text-lg font-semibold text-slate-900 mt-1">{paymentDateTime}</p>
            </div>

            {/* Footer Message */}
            <div className="text-center py-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Please arrive at the booking point 30 minutes before departure.
              </p>
              <p className="text-xs text-slate-500 mt-2">
                A confirmation SMS has been sent to {phone}
              </p>
            </div>
          </div>

          {/* Action Buttons - Outside Receipt Content */}
          <div className="flex gap-3 p-8 border-t border-slate-200 bg-slate-50">
            <button
              onClick={downloadReceipt}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition cursor-pointer"
            >
              Download Receipt
            </button>
            <Link
              to="/buses"
              className="flex-1 bg-slate-200 text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-300 transition text-center"
            >
              Book Another Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}