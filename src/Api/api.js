const axios = require("axios").default;

const Api = {
  baseUrl: "http://universities.hipolabs.com/search?country=",
  getUniversity: async (path) =>
    await (
      await axios.get(Api.baseUrl + path)
    ).data,
};

module.exports = Api;
