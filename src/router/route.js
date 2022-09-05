const router = require("express").Router();
const cors = require("cors");
const {
  sendUniversities,
  principal,
} = require("../Controller/sendUniversities");

const saveArgentina = require("../model/Universities/Repository");

//Cors
router.use(cors());
router.options("*", cors());

//Main

router.get("/", saveArgentina);
// router.get("/", principal);

module.exports = router;
