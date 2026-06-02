function AdminDashboard(){

  return(

    <div className="p-10">

      <h1 className="text-5xl font-bold mb-10">

        Admin Dashboard

      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-2xl font-bold">

            Total Bookings

          </h2>

          <p className="text-5xl mt-6 font-bold text-blue-900">

            120

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-2xl font-bold">

            Revenue

          </h2>

          <p className="text-5xl mt-6 font-bold text-green-600">

            Ksh 250K

          </p>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;