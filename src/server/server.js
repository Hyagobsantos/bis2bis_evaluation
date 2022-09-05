const express = require("express");
require("express-async-errors");
const router = require("../router/route");

const app = express();
app.use(express.json());

// Routes
app.use(router);

module.exports = app;
