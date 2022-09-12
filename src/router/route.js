const router = require("express").Router();
const cors = require("cors");
const { getUniversities,getUniversitiesById } = require("../Controller/getUniversities");
const { main } = require("../Controller/welcome");
const { createUniversities } = require("../Controller/createUniversity");

//Cors
router.use(cors());
router.options("*", cors());

//Get
router.get("/", main);
router.get("/universities", getUniversities);
router.get("/universities/:id", getUniversitiesById);

//Post
router.post("/universities", createUniversities);

module.exports = router;
