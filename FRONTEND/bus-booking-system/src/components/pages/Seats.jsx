import { useState } from "react";
import { Link } from "react-router-dom";

function Seats(){

  const [selectedSeat,setSelectedSeat] = useState(null)

  const seats = Array.from({length:24},(_,i)=>i+1)

  return(

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Select Seat
      </h1>

      <div className="grid grid-cols-4 gap-4">

        {seats.map(seat=>(

          <button
            key={seat}
            onClick={()=>setSelectedSeat(seat)}
            className={`py-4 rounded-xl text-white font-bold
            ${selectedSeat === seat ? "bg-green-600" : "bg-blue-900"}`}
          >

            {seat}

          </button>

        ))}

      </div>

      <Link to="/checkout">

        <button className="mt-10 bg-yellow-400 px-8 py-3 rounded-xl font-bold">
          Continue
        </button>

      </Link>

    </div>

  )

}

export default Seats