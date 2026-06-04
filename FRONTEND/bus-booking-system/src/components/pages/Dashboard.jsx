export default function Dashboard() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>
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
    </div>
  );
}