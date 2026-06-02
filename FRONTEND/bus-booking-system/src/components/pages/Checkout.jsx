import { Link } from "react-router-dom";

function Checkout(){

  return(

    <div className="max-w-4xl mx-auto px-6 py-16">

      <div className="bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <Link to="/payment">

          <button className="bg-blue-900 text-white px-8 py-3 rounded-xl">
            Proceed To Payment
          </button>

        </Link>

      </div>

    </div>

  )

}

export default Checkout