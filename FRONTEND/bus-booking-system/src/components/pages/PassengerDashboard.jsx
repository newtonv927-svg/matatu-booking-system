function PassengerDashboard(){

  return(

    <div className="p-10">

      <h1 className="text-5xl font-bold mb-10">

        Passenger Dashboard

      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-2xl font-bold">

            Upcoming Trips

          </h2>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-2xl font-bold">

            Ticket History

          </h2>

        </div>

      </div>

    </div>

  );

}

export default PassengerDashboard;