const express = require("express");
const { movies } = require("../models");

// add new movie to Db
const createNewMovie = async (req, res) => {
  const { name, totalMovieTime, poster, trailer } = req.body;
  try {
    const newMovie = await movies.create({
      name,
      totalMovieTime,
      poster,
      trailer,
    });
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllMovies = async (req, res) => {
  try {
    const moviesList = await movies.findAll();
    res.status(200).send(moviesList);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get data of 1 movie
const getMovieDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDetail = await movies.findByPk(id);
    if (movieDetail) {
      res.status(200).send(movieDetail);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update data of movie
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, totalMovieTime, poster, trailer } = req.body;
  try {
    const [countUpdate] = await movies.update(
      { name, totalMovieTime, poster, trailer },
      {
        where: {
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Cập nhật thành công");
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete Movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await movies.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createNewMovie,
  getAllMovies,
  getMovieDetail,
  updateMovie,
  deleteMovie,
};
