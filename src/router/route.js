const router = require("express").Router();
const cors = require("cors");
const { getUniversities } = require("../Controller/GetUniversities");
const { main } = require("../Controller/welcome");

//Cors
router.use(cors());
router.options("*", cors());

//Main
router.get("/", main);
router.get("/universities", getUniversities);

module.exports = router;
