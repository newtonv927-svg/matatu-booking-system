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
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleRegister} className="bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-3xl mb-4">
          Register
        </h1>

        <input 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-3 w-full mb-4" 
        />
        <input 
          type="email"
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-3 w-full mb-4" 
        />
        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-3 w-full mb-4" 
        />

        <button 
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-8 py-3 rounded-xl hover:bg-green-600 disabled:opacity-50 w-full"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <Link
          to="/login"
          className="block mt-4 text-center text-blue-500 hover:underline"
        >
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}