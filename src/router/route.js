const router = require("express").Router();
const cors = require("cors");
const {
  sendUniversities,
  principal,
} = require("../Controller/sendUniversities");

const save = require("../model/Universities/Repository");

//Cors
router.use(cors());
router.options("*", cors());

//Main

router.get("/", save);
// router.get("/", principal);

module.exports = router;
