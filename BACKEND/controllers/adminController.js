const prisma = require("../config/prisma");

exports.getAdminOverview = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    const bookings = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        bus: {
          select: {
            id: true,
            name: true,
            route: true,
            departure: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalRevenue = bookings.reduce((sum, booking) => {
      return sum + (booking.bus?.price || 0);
    }, 0);

    res.json({
      users,
      bookings,
      stats: {
        totalUsers: users.length,
        totalBookings: bookings.length,
        totalRevenue,
        totalBuses: await prisma.bus.count(),
      },
    });
  } catch (error) {
    console.error("Admin overview error:", error);
    res.status(500).json({ error: error.message });
  }
};
