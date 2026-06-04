import {
  FaBus,
  FaUsers,
  FaMoneyBillWave,
  FaTicketAlt,
} from "react-icons/fa";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Buses",
      value: 12,
      icon: <FaBus size={30} />,
      color: "bg-blue-500",
    },
    {
      title: "Total Users",
      value: 256,
      icon: <FaUsers size={30} />,
      color: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: "KES 1.2M",
      icon: <FaMoneyBillWave size={30} />,
      color: "bg-yellow-500",
    },
    {
      title: "Total Bookings",
      value: 854,
      icon: <FaTicketAlt size={30} />,
      color: "bg-purple-500",
    },
  ];

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

      {/* Recent Bookings */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Recent Bookings
        </h2>
        <ul className="space-y-3">
  <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
    Nairobi → Mombasa
  </li>

  <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
    Nairobi → Kisumu
  </li>

  <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
    Nairobi → Nakuru
  </li>
</ul>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3">Passenger</th>
                <th className="py-3">Bus</th>
                <th className="py-3">Route</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3">John Doe</td>
                <td>Modern Coast</td>
                <td>Nairobi → Mombasa</td>
                <td>KES 1,500</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Paid
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-slate-50">
                <td className="py-3">Mary Wanjiku</td>
                <td>Easy Coach</td>
                <td>Nairobi → Kisumu</td>
                <td>KES 1,200</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Paid
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="py-3">David Kimani</td>
                <td>Guardian Angel</td>
                <td>Nairobi → Nakuru</td>
                <td>KES 500</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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