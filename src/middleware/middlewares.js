const { save } = require("../model/Universities/Repository");

const validacaoEndPoint = (req, res, next) => {
  save();
  next();
};

module.exports = { validacaoEndPoint };
