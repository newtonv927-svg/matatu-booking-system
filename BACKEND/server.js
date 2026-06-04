const express = require("express");

const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ROUTES

app.use("/api/auth", authRoutes);

app.use("/api/buses", busRoutes);

app.use("/api/bookings", bookingRoutes);


app.get("/",(req,res)=>{

  res.send("Backend Running");

});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error", message: err.message });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{

  console.log(`Server Running on Port ${PORT}`);

  console.log(`CORS enabled for: ${corsOptions.origin}`);

});