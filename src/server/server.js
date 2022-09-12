const express = require("express");
require("express-async-errors");
const router = require("../router/route");
const { createdData } = require("../middleware/middlewares");

const app = express();
app.use(express.json());

//Middlewares Before
app.all("*", createdData);

// Routes
app.use(router);

module.exports = app;
