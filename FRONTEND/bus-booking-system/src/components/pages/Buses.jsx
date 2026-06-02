import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../data/buses.js";

function Buses(){

  const [buses,setBuses] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:5000/api/buses")

      .then((res)=>{

        setBuses(res.data)

      })

  },[])

  return(

    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Available Buses
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {buses.map(bus=>(

          <div
            key={bus.id}
            className="bg-white p-6 rounded-3xl shadow-lg"
          >

            <h2 className="text-2xl font-bold mb-4">
              {bus.name}
            </h2>

            <p>{bus.route}</p>

            <p className="my-4">
              Ksh {bus.price}
            </p>

            <Link to="/bus-details">

              <button className="w-full bg-blue-900 text-white py-3 rounded-xl">
                View Details
              </button>

            </Link>

          </div>

        ))}

      </div>

    </div>

  )

}

export default Buses