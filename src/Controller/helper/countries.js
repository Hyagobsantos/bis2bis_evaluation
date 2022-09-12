const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const countries = [
  prisma.argentina,
  prisma.brasil,
  prisma.chile,
  prisma.colombia,
  prisma.paraguai,
  prisma.peru,
  prisma.suriname,
  prisma.uruguay,
];

module.exports = countries;
