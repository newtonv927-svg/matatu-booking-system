const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{

  const authorization = req.headers.authorization;
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : authorization;

  if(!token){

    return res.status(401).json({

      message:"Access Denied"

    });

  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      message: "JWT secret is not configured",
    });
  }

  try{

    const verified = jwt.verify(

      token,
      process.env.JWT_SECRET

    );

    req.user = verified;

    next();

  }catch(error){

    res.status(400).json({

      message:"Invalid Token"

    });

  }

};