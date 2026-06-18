const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with sample buses...");

  // Clear existing buses
  await prisma.bus.deleteMany();

  // Add sample buses
  const buses = [
    {
      name: "Modern Coast",
      route: "Nairobi → Mombasa",
      departure: "08:00 AM",
      price: 1500,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      totalSeats: 40,
      availableSeats: 28,
    },
    {
      name: "Easy Coach",
      route: "Nairobi → Kisumu",
      departure: "06:00 AM",
      price: 1200,
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      totalSeats: 40,
      availableSeats: 30,
    },
    {
      name: "Guardian Angel",
      route: "Nairobi → Nakuru",
      departure: "10:00 AM",
      price: 500,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      totalSeats: 40,
      availableSeats: 32,
    },
    {
      name: "Skyline",
      route: "Nairobi → Eldoret",
      departure: "07:00 AM",
      price: 800,
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80",
      totalSeats: 40,
      availableSeats: 34,
    },
    {
      name: "Transline",
      route: "Nairobi → Malindi",
      departure: "09:00 AM",
      price: 2000,
      image: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1200&q=80",
      totalSeats: 40,
      availableSeats: 26,
    },
    {
      name: "Super Metro",
      route: "Nairobi → Thika",
      departure: "05:00 AM",
      price: 300,
      image: "https://images.unsplash.com/photo-1520442922418-8211a6fe605c?auto=format&fit=crop&w=1200&q=80",
      totalSeats: 40,
      availableSeats: 22,
    },
  ];

  for (const bus of buses) {
    await prisma.bus.create({
      data: bus,
    });
  }

  console.log("Database seeded with 6 buses!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
