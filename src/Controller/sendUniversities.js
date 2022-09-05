//Send universities
const Api = require("../Api/api");

const principal = async (req, res) => {
  res.json({ info: "Bem Vindo a API SouthPark Brasil" });
};

const sendUniversities = async (req, res) => {
  res.status(200).json(await Api.getUniversity("brazil"));
};

module.exports = { sendUniversities, principal };
