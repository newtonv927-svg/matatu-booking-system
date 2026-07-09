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


// GET BUS BY ID

exports.getBusById = async(req,res)=>{

  try{

    const { id } = req.params;

    const bus = await prisma.bus.findUnique({

      where: { id: parseInt(id) }

    });

    if(!bus){

      return res.status(404).json({ error: "Bus not found" });

    }

    res.json(bus);

  }catch(error){

    res.status(500).json({

      error:error.message

    });

  }

};