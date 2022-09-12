const express = require("express");
require("express-async-errors");
const router = require("../router/route");
const { validacaoEndPoint } = require("../middleware/middlewares");

const app = express();
app.use(express.json());

//Middlewares After
app.use("*", validacaoEndPoint);

// Routes
app.use(router);

module.exports = app;
