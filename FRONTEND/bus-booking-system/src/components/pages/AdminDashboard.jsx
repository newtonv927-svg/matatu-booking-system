import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBus,
  FaUsers,
  FaMoneyBillWave,
  FaTicketAlt,
} from "react-icons/fa";
import { adminAPI } from "../../services/api";

export default function AdminDashboard() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterBus, setFilterBus] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [userRoleFilter, setUserRoleFilter] = useState("");
  const [userSortField, setUserSortField] = useState("name");
  const [userSortOrder, setUserSortOrder] = useState("asc");
  const [settings, setSettings] = useState({
    emailNotifications: true,
    bookingAlerts: true,
  });
  const navigate = useNavigate();

  const fetchOverview = async () => {
    setLoading(true);
    try {
      const response = await adminAPI.getOverview();
      setOverview(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load admin overview");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadOverview = async () => {
      await fetchOverview();
    };

    loadOverview();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSettingsToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredUsers = useMemo(() => {
    return (overview?.users || [])
      .filter((user) => {
        const searchLower = userSearch.toLowerCase();
        const matchesSearch =
          !userSearch ||
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower);
        const matchesRole = !userRoleFilter || user.role === userRoleFilter;
        return matchesSearch && matchesRole;
      })
      .sort((a, b) => {
        const aValue = a[userSortField]?.toLowerCase?.() || "";
        const bValue = b[userSortField]?.toLowerCase?.() || "";
        if (aValue < bValue) return userSortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return userSortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [overview?.users, userSearch, userRoleFilter, userSortField, userSortOrder]);


  const stats = [
    {
      title: "Total Buses",
      value: overview?.stats?.totalBuses ?? "...",
      icon: <FaBus size={30} />,
      color: "bg-blue-500",
    },
    {
      title: "Total Users",
      value: overview?.stats?.totalUsers ?? "...",
      icon: <FaUsers size={30} />,
      color: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: overview?.stats?.totalRevenue != null ? `KES ${overview.stats.totalRevenue.toLocaleString()}` : "...",
      icon: <FaMoneyBillWave size={30} />,
      color: "bg-yellow-500",
    },
    {
      title: "Total Bookings",
      value: overview?.stats?.totalBookings ?? "...",
      icon: <FaTicketAlt size={30} />,
      color: "bg-purple-500",
    },
  ];

  const filteredBookings = overview?.bookings?.filter((booking) => {
    const searchLower = searchText.toLowerCase();
    const userName = booking.user?.name ?? "";
    const userEmail = booking.user?.email ?? "";
    const busName = booking.bus?.name ?? "";
    const busRoute = booking.bus?.route ?? "";

    const matchesSearch =
      !searchText ||
      userName.toLowerCase().includes(searchLower) ||
      userEmail.toLowerCase().includes(searchLower) ||
      busName.toLowerCase().includes(searchLower) ||
      busRoute.toLowerCase().includes(searchLower);

    const matchesBus = !filterBus || busName === filterBus;
    const matchesStatus = !filterStatus || booking.status === filterStatus;

    return matchesSearch && matchesBus && matchesStatus;
  }) || [];

  const uniqueBusNames = Array.from(
    new Set(overview?.bookings?.map((booking) => booking.bus?.name).filter(Boolean))
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Admin Dashboard
        </h1>
        <p className="text-slate-500">
          Manage buses, users, bookings and revenue
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500">{stat.title}</p>
                <h2 className="text-3xl font-bold mt-2">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`${stat.color} text-white p-4 rounded-xl`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Admin Settings */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Admin Settings</h2>
            <p className="text-slate-500">Manage account-level settings and refresh admin data.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={fetchOverview}
              className="rounded-2xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
            >
              Refresh Overview
            </button>
            <button
              onClick={handleLogout}
              className="rounded-2xl border border-slate-300 bg-slate-100 px-5 py-3 text-slate-700 transition hover:bg-slate-200"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <span>Email notifications</span>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() => handleSettingsToggle("emailNotifications")}
              className="h-5 w-5 rounded border-slate-300 text-blue-600"
            />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <span>Booking alerts</span>
            <input
              type="checkbox"
              checked={settings.bookingAlerts}
              onChange={() => handleSettingsToggle("bookingAlerts")}
              className="h-5 w-5 rounded border-slate-300 text-blue-600"
            />
          </label>
        </div>
      </div>

      {/* Booking Filters */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Booking Filters</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search passenger, email, route, bus..."
            className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <select
            value={filterBus}
            onChange={(e) => setFilterBus(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">All Buses</option>
            {uniqueBusNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">All Statuses</option>
            <option value="booked">Booked</option>
            <option value="cancelled">Cancelled</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Recent Bookings</h2>
            <p className="text-slate-500">Latest booked buses with user emails.</p>
          </div>
          {loading && <span className="text-slate-500">Loading...</span>}
        </div>

        {error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Passenger</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Bus</th>
                  <th className="py-3">Route</th>
                  <th className="py-3">Amount</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.slice(0, 10).map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-slate-50">
                    <td className="py-3">{booking.user?.name || "Unknown"}</td>
                    <td>{booking.user?.email || "-"}</td>
                    <td>{booking.bus?.name || "-"}</td>
                    <td>{booking.bus?.route || "-"}</td>
                    <td>{booking.bus ? `KES ${booking.bus.price.toLocaleString()}` : "-"}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-sm ${booking.status === "booked" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredBookings.length === 0 && (
              <div className="py-6 text-center text-slate-500">No bookings match the current filters.</div>
            )}
          </div>
        )}
      </div>

      {/* Users List */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Users List</h2>
            <p className="text-slate-500">Search, filter and sort registered users.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="Search name or email"
              className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <select
              value={userRoleFilter}
              onChange={(e) => setUserRoleFilter(e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">All Roles</option>
              <option value="passenger">Passenger</option>
              <option value="admin">Admin</option>
            </select>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={userSortField}
                onChange={(e) => setUserSortField(e.target.value)}
                className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
                <option value="role">Sort by Role</option>
              </select>
              <select
                value={userSortOrder}
                onChange={(e) => setUserSortOrder(e.target.value)}
                className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-slate-50">
                  <td className="py-3">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <div className="py-6 text-center text-slate-500">No users match your filters.</div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition">
          Add New Bus
        </button>

        <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition">
          View Users
        </button>

        <button className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition">
          Generate Report
        </button>
      </div>
    </div>
  );
}