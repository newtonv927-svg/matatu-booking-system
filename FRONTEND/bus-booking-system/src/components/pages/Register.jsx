import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { authAPI } from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAPI.register({ name, email, password });
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl w-full mx-6">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop&s=3f1a9d6f5a3b2dd7a3f7e5b7c0e3f1b2')] bg-cover bg-center"></div>

          <form onSubmit={handleRegister} className="p-10 md:p-12">
            <h1 className="text-2xl font-bold mb-2">Create an account</h1>
            <p className="text-sm text-gray-500 mb-6">Sign up to book seats, manage trips and view invoices.</p>

            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <input 
              placeholder="Jane Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-4 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" 
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" 
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password"
              placeholder="Create a password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-4 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" 
            />

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Already have an account?</span>
              <Link to="/login" className="ml-2 text-indigo-600 font-medium">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}