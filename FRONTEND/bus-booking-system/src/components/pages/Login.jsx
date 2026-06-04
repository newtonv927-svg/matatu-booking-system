import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-3xl mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4"
        />

        <button className="bg-blue-500 text-white px-8 py-3 rounded-xl">
          Login
        </button>

        <Link
          to="/register"
          className="block mt-4"
        >
          Register
        </Link>
      </form>
    </div>
  );
}