const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const countries = require("../helper/countries");

async function searchUniversity(name, id) {
  const allUniversities = countries.map(async (x, y) => {
    return await x.findFirst({
      where: {
        OR: [{ name: name }, { id: id }],
      },
      select: {
        id: true,
        name: true,
        country: true,
        state_province: true,
      },
    });
  });

  let universities = [];
  for (let universitie in allUniversities) {
    await allUniversities[universitie].then(async (uni) => {
      if (uni !== null) {
        universities.push(uni);
      }
    });
  }

  return universities;
}

module.exports = searchUniversity;
