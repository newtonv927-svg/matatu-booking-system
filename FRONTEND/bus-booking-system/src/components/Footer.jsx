import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="bg-gray-950 text-white mt-20">

      {/* TOP SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}

        <div>

          <h1 className="text-4xl font-extrabold text-blue-500">
            SwiftBus
          </h1>

          <p className="mt-5 text-gray-400 leading-7">

            Premium online coach booking platform offering
            secure, fast, and comfortable travel across Kenya.

          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <Link to="/buses" className="hover:text-blue-400 transition">
              Buses
            </Link>

            <Link to="/login" className="hover:text-blue-400 transition">
              Login
            </Link>

            <Link to="/register" className="hover:text-blue-400 transition">
              Register
            </Link>

          </div>

        </div>

        {/* SERVICES */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Services
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <p className="hover:text-blue-400 transition cursor-pointer">
              Online Booking
            </p>

            <p className="hover:text-blue-400 transition cursor-pointer">
              Luxury Coaches
            </p>

            <p className="hover:text-blue-400 transition cursor-pointer">
              M-Pesa Payments
            </p>

            <p className="hover:text-blue-400 transition cursor-pointer">
              Ticket Tracking
            </p>

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Contact
          </h2>

          <div className="space-y-4 text-gray-400">

            <p>
              Nairobi, Kenya
            </p>

            <p>
              +254 712 345 678
            </p>

            <p>
              support@swiftbus.com
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">

            © 2026 SwiftBus Booking System.
            All rights reserved.

          </p>

          {/* SOCIALS */}

          <div className="flex gap-5">

            <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer">

              <span className="font-bold">
                F
              </span>

            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 transition flex items-center justify-center cursor-pointer">

              <span className="font-bold">
                T
              </span>

            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-500 transition flex items-center justify-center cursor-pointer">

              <span className="font-bold">
                I
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;