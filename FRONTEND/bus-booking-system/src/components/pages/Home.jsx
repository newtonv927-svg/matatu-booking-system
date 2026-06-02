import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen relative overflow-hidden">

      {/* BACKGROUND IMAGE */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-6">

        <div className="backdrop-blur-sm bg-black/20 p-10 rounded-3xl border border-white/10 shadow-2xl">

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">

            SwiftBus
            <span className="text-blue-400"> Booking System</span>

          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">

            Experience luxury travel across Kenya with premium
            coach booking, secure payments, and real-time seat selection.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">

            <Link to="/buses">

              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl transition duration-300">

                Book Now

              </button>

            </Link>

            <Link to="/routes">

              <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-10 py-4 rounded-2xl text-lg font-bold transition duration-300">

              Explore Routes

              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;