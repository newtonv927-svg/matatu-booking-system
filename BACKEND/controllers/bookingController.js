const prisma = require("../config/prisma");


// CREATE BOOKING

exports.createBooking = async(req,res)=>{

  try{

    const {

      seatNumber,
      userId,
      busId

    } = req.body;


    const existingSeat = await prisma.booking.findFirst({

      where:{

        seatNumber,
        busId

      }

    });

    if(existingSeat){

      return res.status(400).json({

        message:"Seat already booked"

      });

    }


    const booking = await prisma.booking.create({

      data:{

        seatNumber,
        userId,
        busId

      }

    });

    res.json({

      message:"Booking Successful",

      booking

    });

  }catch(error){

    res.status(500).json({

      error:error.message

    });

  }

};


// GET USER BOOKINGS

exports.getUserBookings = async(req,res)=>{

  try{

    const userId = Number(req.params.userId);

    const bookings = await prisma.booking.findMany({

      where:{ userId },

      include:{

        bus:true

      }

    });

    res.json(bookings);

  }catch(error){

    res.status(500).json({

      error:error.message

    });

  }

};