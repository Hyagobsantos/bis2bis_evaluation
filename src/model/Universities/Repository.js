const Api = require("../../Api/api");
const university = require("./ListForSearch");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function saveArgentina() {
  const arg = await Api.getUniversity(university.argentina);
  await Promise.all(
    arg.map(async (user) => {
      await prisma.argentina.create({
        data: {
          domains: user.domains,
          alpha_two_code: user.alpha_two_code,
          country: user.country,
          web_pages: user.web_pages,
          name: user.name,
          state_province: Object.values(user)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Argentina");
}

async function saveBrasil() {
  const bra = await Api.getUniversity(university.brasil);
  await Promise.all(
    bra.map(async (country) => {
      await prisma.brasil.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Brasil");
}

async function saveColombia() {
  const col = await Api.getUniversity(university.colombia);
  await Promise.all(
    col.map(async (country) => {
      await prisma.colombia.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Colombia");
}

async function saveChile() {
  const chi = await Api.getUniversity(university.chile);
  await Promise.all(
    chi.map(async (country) => {
      await prisma.chile.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Chile");
}

async function saveParaguai() {
  const par = await Api.getUniversity(university.paraguai);
  await Promise.all(
    par.map(async (country) => {
      await prisma.paraguai.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Paraguai");
}

async function savePeru() {
  const per = await Api.getUniversity(university.peru);
  await Promise.all(
    per.map(async (country) => {
      await prisma.peru.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Peru");
}

async function saveSuriname() {
  const sur = await Api.getUniversity(university.suriname);
  await Promise.all(
    sur.map(async (country) => {
      await prisma.suriname.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Suriname");
}

async function saveUruguay() {
  const uru = await Api.getUniversity(university.uruguay);
  await Promise.all(
    uru.map(async (country) => {
      await prisma.uruguay.create({
        data: {
          domains: country.domains,
          alpha_two_code: country.alpha_two_code,
          country: country.country,
          web_pages: country.web_pages,
          name: country.name,
          state_province: Object.values(country)[5],
        },
      });
    })
  );
  console.log("Finalizado Save Uruguay");
}

async function save(req, res) {
  try {
    await prisma.$connect();
    saveArgentina();
    // saveBrasil();
    // saveColombia();
    // saveChile();
    // saveParaguai();
    // savePeru();
    // saveSuriname();
    // saveUruguay();
    await prisma.$disconnect();
  } catch (err) {
    res.status(400).json({ err: "Salvo com sucesso" });
  }
}

module.exports = save;
