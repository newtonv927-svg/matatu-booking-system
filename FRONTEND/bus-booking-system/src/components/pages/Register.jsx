export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-3xl mb-4">
          Register
        </h1>

        <input placeholder="Name" className="border p-3 w-full mb-4" />
        <input placeholder="Email" className="border p-3 w-full mb-4" />
        <input placeholder="Password" className="border p-3 w-full mb-4" />

        <button className="bg-green-500 text-white px-8 py-3 rounded-xl">
          Create Account
        </button>
      </form>
    </div>
  );
}