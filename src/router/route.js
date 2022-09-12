const router = require("express").Router();
const cors = require("cors");
const {
  getUniversities,
  getUniversitiesById,
} = require("../Controller/getUniversities");
const { main } = require("../Controller/welcome");
const { createUniversities } = require("../Controller/createUniversity");
const { updateUniversities } = require("../Controller/updateUniversity");
const { deleteUniversities } = require("../Controller/deleteUniverity");

//Cors
router.use(cors());
router.options("*", cors());

//Get
router.get("/", main);
router.get("/universities", getUniversities);
router.get("/universities/:id", getUniversitiesById);

//Post
router.post("/universities", createUniversities);

//Put
router.put("/universities/:id", updateUniversities);

//Delete
router.delete("/universities/:id", deleteUniversities);

module.exports = router;
