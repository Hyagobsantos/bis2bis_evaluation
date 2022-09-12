const Api = require("../../Api/api");
const university = require("./ListForSearch");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();

function saveUniversities(university) {
  let total = [];
  university.map((uni) => {
    total.push({
      domains: uni.domains,
      alpha_two_code: uni.alpha_two_code,
      country: uni.country,
      web_pages: uni.web_pages,
      name: uni.name,
      state_province: Object.values(uni)[5],
    });
  });

  return total;
}

async function saveArgentina() {
  const arg = await Api.getUniversity(university.argentina);

  if (arg.length !== 0) {
    await prisma.argentina.createMany({
      data: saveUniversities(arg),
    });
  }

  console.log("Finalizado Save Argentina");
}

async function saveBrasil() {
  const bra = await Api.getUniversity(university.brasil);

  if (bra.length !== 0) {
    await prisma.brasil.createMany({
      data: saveUniversities(bra),
    });
  }

  console.log("Finalizado Save Brasil");
}

async function saveColombia() {
  const col = await Api.getUniversity(university.colombia);

  if (col.length !== 0) {
    await prisma.colombia.createMany({
      data: saveUniversities(col),
    });
  }

  console.log("Finalizado Save Colombia");
}

async function saveChile() {
  const chi = await Api.getUniversity(university.chile);

  if (chi.length !== 0) {
    await prisma.chile.createMany({
      data: saveUniversities(chi),
    });
  }

  console.log("Finalizado Save Chile");
}

async function saveParaguai() {
  const par = await Api.getUniversity(university.paraguai);

  if (par.length !== 0) {
    await prisma.paraguai.createMany({
      data: saveUniversities(par),
    });
  }

  console.log("Finalizado Save Paraguai");
}

async function savePeru() {
  const per = await Api.getUniversity(university.peru);

  if (per.length !== 0) {
  }
  await prisma.peru.createMany({
    data: saveUniversities(per),
  });

  console.log("Finalizado Save Peru");
}

async function saveSuriname() {
  const sur = await Api.getUniversity(university.suriname);

  if (sur.length !== 0) {
    await prisma.suriname.createMany({
      data: saveUniversities(sur),
    });
  }

  console.log("Finalizado Save Suriname");
}

async function saveUruguay() {
  const uru = await Api.getUniversity(university.uruguay);

  if (uru.length !== 0) {
    await prisma.uruguay.createMany({
      data: saveUniversities(uru),
    });
  }

  console.log("Finalizado Save Uruguay");
}

async function save() {
  await prisma.is_populad.create({
    data: {
      id: process.env.DB_FLAG_IS_POPULAD,
      populated: false,
    },
  });
  saveArgentina();
  saveBrasil();
  saveColombia();
  saveChile();
  saveParaguai();
  savePeru();
  saveSuriname();
  saveUruguay();
  await prisma.is_populad.update({
    where: {
      id: process.env.DB_FLAG_IS_POPULAD,
    },
    data: {
      populated: true,
    },
  });
}

module.exports = { save };
