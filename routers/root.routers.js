const express = require("express");
const { moviesRouters } = require("./movies.routers");
const rootRouters = express.Router();
rootRouters.use("/movies", moviesRouters);
module.exports = { rootRouters };
