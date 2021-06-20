const express = require("express");
const moviesRouters = express.Router();
const {
  createNewMovie,
  getAllMovies,
  getMovieDetail,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

// add new movie
moviesRouters.post("/", createNewMovie);

// get all list movie
moviesRouters.get("/", getAllMovies);

// Get 1 movie
moviesRouters.get("/:id", getMovieDetail);

// update movie data
moviesRouters.put("/:id", updateMovie);

// Delete movie
moviesRouters.delete("/:id", deleteMovie);

module.exports = { moviesRouters };
