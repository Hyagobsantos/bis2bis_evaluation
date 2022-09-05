const Api = require("../../Api/api");
const db = require("../../Database/database");
const university = require("./ListForSearch");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function saveArgentina() {
  const arg = await Api.getUniversity(university.argentina);
  await Promise.all(
    arg.map(async (user, index) => {
      await prisma.argentina.create({
        data: {
          domains: user.domains,
          alpha_two_code: user.alpha_two_code,
          country: user.country,
          web_pages: user.web_pages,
          name: user.name,
          stateprovince: Object.values(user)[5],
        },
      });
    })
  );
}

module.exports = saveArgentina;
