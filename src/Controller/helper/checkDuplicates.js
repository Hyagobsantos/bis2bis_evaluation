const searchUniversity = require("../helper/searchUniversity");

async function checkDuplicates(date) {
  const contain = await searchUniversity(date.name, date.id);
  if (contain.length !== 0) {
    return "university already registered";
  }
}

module.exports = checkDuplicates;
