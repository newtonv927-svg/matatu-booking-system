
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-slate-950 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950 shadow-md">
            S
          </span>
          SwiftBus
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-300">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/buses" className="hover:text-white transition duration-300">
                Buses
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-white transition duration-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition duration-300">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/register"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
          >
            Register
          </Link>
          <Link
            to="/buses"
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
