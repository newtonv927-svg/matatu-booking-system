
import { useMemo, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useMemo(() => getCurrentUser(), [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-slate-950 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950 shadow-md">
            S
          </span>
          SwiftBus
        </Link>

        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-100 transition hover:border-slate-500 hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

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
              {user?.role === "admin" && (
                <li>
                  <Link to="/admin-dashboard" className="hover:text-white transition duration-300">
                    Admin Dashboard
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="hover:text-white transition duration-300">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {user?.role === "admin" && (
            <Link
              to="/admin-dashboard"
              className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
            >
              Admin Dashboard
            </Link>
          )}
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

      {mobileOpen && (
        <nav className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <ul className="space-y-4 text-sm font-medium text-slate-300">
            <li>
              <Link to="/" className="block hover:text-white transition duration-300" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/buses" className="block hover:text-white transition duration-300" onClick={() => setMobileOpen(false)}>
                Buses
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="block hover:text-white transition duration-300" onClick={() => setMobileOpen(false)}>
                Dashboard
              </Link>
            </li>
            {user?.role === "admin" && (
              <li>
                <Link
                  to="/admin-dashboard"
                  className="block hover:text-white transition duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  Admin Dashboard
                </Link>
              </li>
            )}
            {user ? (
              <li>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleLogout();
                  }}
                  className="w-full rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="block hover:text-white transition duration-300" onClick={() => setMobileOpen(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
