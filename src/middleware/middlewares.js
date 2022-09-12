const { save } = require("../model/Universities/Repository");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createdData = async (req, res, next) => {
  const pupulad = await prisma.is_populad.findUnique({
    where: {
      id: process.env.DB_FLAG_IS_POPULAD,
    },
    select: {
      populated: true,
    },
  });

  if (pupulad === null) {
    await save();
  }
  next();
};

module.exports = { createdData };
