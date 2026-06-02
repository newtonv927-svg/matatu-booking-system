const express = require("express");

const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/auth", authRoutes);

app.use("/api/buses", busRoutes);

app.use("/api/bookings", bookingRoutes);


app.get("/",(req,res)=>{

  res.send("Backend Running");

});


const PORT = 5000;

app.listen(PORT,()=>{

  console.log(`Server Running on Port ${PORT}`);

});