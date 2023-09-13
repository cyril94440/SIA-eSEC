import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password", 10);
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      username: "Bob",
      password,
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@prisma.io" },
    update: {},
    create: {
      email: "admin@prisma.io",
      username: "Admin",
      password,
      role: "ADMIN",
    },
  });
  console.log({ bob, admin });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
