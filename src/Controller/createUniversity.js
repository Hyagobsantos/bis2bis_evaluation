const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const checkDuplicates = require("../Controller/helper/checkDuplicates");
const {
  checkTypeField,
  checkFields,
} = require("../Controller/helper/checkFields");

const createUniversities = async (req, res) => {
  const inf = req.body;

  const verify = await checkDuplicates(inf);
  const checkType = checkTypeField(inf);
  const checkField = checkFields(inf);

  if (verify || checkField || checkType) {
    res.status(400).json({ erro: verify ?? checkField ?? checkType });
    return;
  }

  const country = {
    argentina: prisma.argentina,
    brasil: prisma.brasil,
    chile: prisma.chile,
    colombia: prisma.colombia,
    paraguai: prisma.paraguai,
    peru: prisma.peru,
    suriname: prisma.suriname,
    uruguay: prisma.uruguay,
  };

  let select;
  switch (inf.country) {
    case "Brazil":
      select = country.brasil;
      break;

    case "Argentina":
      select = country.argentina;
      break;

    case "Chile":
      select = country.chile;
      break;

    case "Colombia":
      select = country.colombia;
      break;

    case "Paraguai":
      select = country.paraguai;
      break;

    case "Peru":
      select = country.peru;
      break;

    case "Suriname":
      select = country.suriname;
      break;

    case "Uruguay":
      select = country.uruguay;
      break;
  }

  try {
    const insert = await select.create({
      data: {
        domains: inf.domains,
        alpha_two_code: inf.alpha_two_code,
        country: inf.country,
        web_pages: inf.web_pages,
        name: inf.name,
        state_province: inf.state_province,
      },
    });

    if (!insert) {
      res.status(500).json({ erro: "error when inserting" });
    }
    res.status(201).json({ data: insert });
  } catch (err) {
    res.status(500).json({ erro: err });
  }
};

module.exports = { createUniversities };
