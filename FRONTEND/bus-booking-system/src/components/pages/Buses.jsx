import { Link } from "react-router-dom";

const buses = [
  
   {
    id: 1,
    name: "Modern Coast",
    route: "Nairobi → Mombasa",
    fare: 1500,
  },

  {
    id: 2,
    name: "Easy Coach",
    route: "Nairobi → Kisumu",
    fare: 1200,
  },

  {
    id: 3,
    name: "Guardian Angel",
    route: "Nairobi → Nakuru",
    fare: 500,
  },

  {
    id: 4,
    name: "Skyline",
    route: "Nairobi → Eldoret",
    fare: 800,
  },

  {
    id: 5,
    name: "Transline",
    route: "Nairobi → Malindi",
    fare: 2000,

  },

  {
    id: 6,
    name: "Super Metro",
    route: "Nairobi → Thika",
    fare: 300,
  },
];

export default function Buses() {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">
        Available Buses
      </h1>
<div className="max-w-7xl mx-auto px-4 py-10">
  <h1 className="text-4xl font-bold text-center mb-10">
    Available Buses
  </h1>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {buses.map((bus) => (
      <div
        key={bus.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold">
            {bus.name}
          </h2>

          <p className="text-gray-600 mt-2">
            {bus.route}
          </p>

          <p className="text-blue-600 font-bold text-xl mt-4">
            KES {bus.fare}
          </p>

          <Link
            to={`/bus/${bus.id}`}
            className="mt-5 block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}

  </div>
</div>
      <div className="grid md:grid-cols-3 gap-8">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-white rounded-3xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold">
              {bus.name}
            </h2>

            <p>{bus.route}</p>

            <p className="font-bold text-green-600">
              KES {bus.fare}
            </p>

            <Link
              to={`/bus/${bus.id}`}
              className="mt-4 inline-block bg-yellow-500 px-5 py-2 rounded-xl"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}