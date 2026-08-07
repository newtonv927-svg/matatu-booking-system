const express = require("express");
const router = express.Router();
const { getAdminOverview } = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddlewares");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/overview", authMiddleware, adminMiddleware, getAdminOverview);

module.exports = router;
