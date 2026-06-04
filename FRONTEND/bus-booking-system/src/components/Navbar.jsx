
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-blue-500">
          SwiftBus
        </Link>

        <nav>
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-200">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/buses"
                className="hover:text-blue-400 transition duration-300"
              >
                Buses
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-400 transition duration-300"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-blue-400 transition duration-300"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
