import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-blue-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          SwiftBus
        </h1>

        <div className="flex gap-6 font-medium">

          <Link to="/">Home</Link>

          <Link to="/buses">Buses</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;