const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUniversities = async (req, res) => {
  const county = req.query;
  let { page } = req.body;

  //checking if page exists, value default 0 = first page
  if (!page) {
    page = 0;
  }

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

  if (county.country) {
    const filter =
      county.country[0].toUpperCase() + county.country.substring(1);

    const allUniversities = countries.map(async (x) => {
      return await x.findMany({
        skip: 20 * page,
        take: 20,
        where: { country: filter },
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
        // checking if universitie not empty
        if (uni.length !== 0) {
          universities.push(uni);
        }
      });
    }

    res.status(200).json(universities);
  } else {
    const allUniversities = countries.map(async (x, y) => {
      return await x.findMany({
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
        universities.push([...uni]);
      });
    }

    res.status(200).json(universities);
  }
};

module.exports = { getUniversities };
