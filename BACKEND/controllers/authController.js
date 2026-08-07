const prisma = require("../config/prisma");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER

exports.register = async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const email = req.body.email?.toLowerCase().trim();
    const password = req.body.password;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const safeUser = { ...user };
    delete safeUser.password;

    res.status(201).json({
      message: "User Registered",
      user: safeUser,
    });
  } catch (error) {
    console.error("Auth register error:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};


// LOGIN

exports.login = async (req, res) => {
  try {
    const email = req.body.email?.toLowerCase().trim();
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "JWT secret is not configured",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const safeUser = { ...user };
    delete safeUser.password;

    res.json({
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error("Auth login error:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};