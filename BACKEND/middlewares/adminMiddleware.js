module.exports = (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Access Denied" });
  }

  if (user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }

  next();
};
