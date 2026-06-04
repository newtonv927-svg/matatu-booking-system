import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/pages/home";
import Buses from "./components/pages/Buses";
import BusDetails from "./components/pages/BusDetails";
import Seats from "./components/pages/Seats";
import Checkout from "./components/pages/Checkout";
import Payment from "./components/pages/Payment";
import Invoice from "./components/pages/Invoice";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import PassengerDashboard from "./components/pages/PassengerDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/bus/:id" element={<BusDetails />} />
        <Route path="/seats/:id" element={<Seats />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/passenger-dashboard" element={<PassengerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
