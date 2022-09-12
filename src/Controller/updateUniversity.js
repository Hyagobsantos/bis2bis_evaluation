const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const searchUniversity = require("../Controller/helper/searchUniversity");
const { checkFieldsUpdate } = require("../Controller/helper/checkFields");

const updateUniversities = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const universitie = await searchUniversity("", id);

  if (!universitie) {
    res.status(400).json({ erro: "error when searching" });
  }

  const validate = checkFieldsUpdate(data);

  if (validate) {
    res.status(400).json({ erro: validate });
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
  switch (universitie[0].country) {
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
    const update = await select.update({
      where: { id: id },
      data: {
        web_pages: data.web_pages,
        name: data.name,
        domains: data.domains,
      },
    });

    if (!update) {
      res.status(500).json({ erro: "error when updating" });
    }
    res.status(201).json({ data: update });
  } catch (err) {
    res.status(500).json({ erro: err });
  }
};

module.exports = { updateUniversities };
