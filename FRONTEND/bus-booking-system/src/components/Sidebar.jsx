import {
  FaBus,
  FaHome,
  FaTicketAlt,
  FaUser
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="bg-blue-950 text-white w-[250px] min-h-screen p-6 fixed">

      <h1 className="text-3xl font-bold mb-10">
        SwiftBus
      </h1>

      <div className="flex flex-col gap-6 text-lg">

        <Link to="/" className="flex items-center gap-3 hover:text-yellow-300">

          <FaHome />
          Home

        </Link>

        <Link to="/buses" className="flex items-center gap-3 hover:text-yellow-300">

          <FaBus />
          Buses

        </Link>

        <Link to="/tickets" className="flex items-center gap-3 hover:text-yellow-300">

          <FaTicketAlt />
          Tickets

        </Link>

        <Link to="/login" className="flex items-center gap-3 hover:text-yellow-300">

          <FaUser />
          Login

        </Link>

      </div>

    </div>

  );

}

export default Sidebar;