import { useEffect, useState } from "react";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-100 text-black dark:bg-slate-950 dark:text-white">

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-black/40 dark:border-white/10">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="flex items-center gap-4">

          {/* Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-white/10"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>

          <div className="w-9 h-9 rounded-full bg-blue-500"></div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 hidden md:block p-5 border-r bg-white dark:bg-black/30 dark:border-white/10">
          <nav className="space-y-3">
            <p className="hover:bg-gray-200 dark:hover:bg-white/10 p-2 rounded">Home</p>
            <p className="hover:bg-gray-200 dark:hover:bg-white/10 p-2 rounded">Users</p>
            <p className="hover:bg-gray-200 dark:hover:bg-white/10 p-2 rounded">Analytics</p>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-5 rounded-xl shadow bg-white dark:bg-white/10">
              Users: 12,430
            </div>

            <div className="p-5 rounded-xl shadow bg-white dark:bg-white/10">
              Revenue: $34,210
            </div>

            <div className="p-5 rounded-xl shadow bg-white dark:bg-white/10">
              Orders: 1,240
            </div>

            <div className="p-5 rounded-xl shadow bg-white dark:bg-white/10">
              Growth: +18%
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}