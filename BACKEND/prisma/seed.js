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
    },
    {
      name: "Easy Coach",
      route: "Nairobi → Kisumu",
      departure: "06:00 AM",
      price: 1200,
    },
    {
      name: "Guardian Angel",
      route: "Nairobi → Nakuru",
      departure: "10:00 AM",
      price: 500,
    },
    {
      name: "Skyline",
      route: "Nairobi → Eldoret",
      departure: "07:00 AM",
      price: 800,
    },
    {
      name: "Transline",
      route: "Nairobi → Malindi",
      departure: "09:00 AM",
      price: 2000,
    },
    {
      name: "Super Metro",
      route: "Nairobi → Thika",
      departure: "05:00 AM",
      price: 300,
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
