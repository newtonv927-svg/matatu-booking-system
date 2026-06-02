import { Link } from "react-router-dom";

function Payment(){

  return(

    <div className="p-10">

      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-xl">

        <h1 className="text-4xl font-bold mb-8">
          M-Pesa Payment
        </h1>

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-4 rounded-xl mb-6"
        />

        <Link to="/invoice">

          <button className="bg-green-600 text-white px-8 py-3 rounded-xl">
            Pay Now
          </button>

        </Link>

      </div>

    </div>

  )

}

export default Payment