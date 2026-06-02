const prisma = require("../config/prisma");


// GET ALL BUSES

exports.getBuses = async(req,res)=>{

  try{

    const buses = await prisma.bus.findMany();

    res.json(buses);

  }catch(error){

    res.status(500).json({

      error:error.message

    });

  }

};