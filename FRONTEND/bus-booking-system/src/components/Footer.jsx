import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <h1 className="text-4xl font-extrabold text-white">SwiftBus</h1>
          <p className="mt-4 text-slate-400 leading-7">
            A premium coach booking service built for fast, reliable,
            and secure travel across Kenya.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-5">Explore</h2>
          <div className="flex flex-col gap-3 text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/buses" className="hover:text-white transition">Buses</Link>
            <Link to="/login" className="hover:text-white transition">Login</Link>
            <Link to="/register" className="hover:text-white transition">Register</Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-5">Services</h2>
          <div className="flex flex-col gap-3 text-slate-400">
            <p className="hover:text-white transition cursor-default">Online Booking</p>
            <p className="hover:text-white transition cursor-default">Luxury Coaches</p>
            <p className="hover:text-white transition cursor-default">M-Pesa Payments</p>
            <p className="hover:text-white transition cursor-default">Digital Ticketing</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-5">Contact</h2>
          <div className="space-y-4 text-slate-400">
            <p>Nairobi, Kenya</p>
            <p>+254 712 345 678</p>
            <p>support@swiftbus.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-500 text-sm">© 2026 SwiftBus. All rights reserved.</p>
          <div className="flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white hover:bg-blue-600 transition cursor-pointer">F</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white hover:bg-blue-500 transition cursor-pointer">T</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white hover:bg-pink-500 transition cursor-pointer">I</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;