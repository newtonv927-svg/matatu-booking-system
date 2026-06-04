import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function BusDetails() {
  const { id } = useParams();
const navigate = useNavigate();

<button
  onClick={() => navigate("/seats")}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Book Now
</button>
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 rounded-3xl">
        <h1 className="text-4xl font-bold">
          Bus #{id}
        </h1>

        <Link
          to={`/seats/${id}`}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl mt-6 inline-block"
        >
          Select Seat
        </Link>
      </div>
    </div>
  );
}