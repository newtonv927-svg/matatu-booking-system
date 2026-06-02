import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"; 

import Home from "./components/pages/Home";
import Buses from "./components/pages/Buses";
import BusDetails from "./components/pages/BusDetails";
import Seat from "./components/pages/Seats";
import Invoice from "./components/pages/Invoice";
import Payment from "./components/pages/Payment";
import Checkout from "./components/pages/Checkout";
import Register from "./components/pages/Register"; 
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/AdminDashboard";
import PassengerDashboard from "./components/pages/PassengerDashboard";
import Analytics from "./components/pages/Analytics";



function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-black">

        <Navbar />
        <Sidebar/>

        <div className="flex-1">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/buses" element={<Buses />} />

            <Route path="/bus/:id" element={<BusDetails />} />

            <Route path="/seats" element={<Seat />} />

            <Route path="/invoice" element={<Invoice />} />

            <Route path="/payment" element={<Payment />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<AdminDashboard />} />

            <Route path="/passenger" element={<PassengerDashboard />} />

            <Route path="/analytics" element={<Analytics />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;