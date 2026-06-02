function Register() {

  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-[400px]">

        <h1 className="text-4xl font-bold mb-8 text-center">

          Register

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

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-xl mb-6"
        />

        <button className="w-full bg-blue-900 text-white py-3 rounded-xl">

          Create Account

        </button>

      </div>

    </div>

  );

}

export default Register;