const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const searchUniversity = require("../Controller/helper/searchUniversity");

const deleteUniversities = async (req, res) => {
  const id = req.params.id;

  const universitie = await searchUniversity("", id);

  if (!universitie) {
    res.status(400).json({ erro: "error when searching" });
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
    const deleted = await select.delete({
      where: { id: id },
    });

    if (!deleted) {
      res.status(500).json({ erro: "error when deleting" });
    }
    res.status(201).json({ data: deleted });
  } catch (err) {
    res.status(500).json({ erro: err });
  }
};

module.exports = { deleteUniversities };
