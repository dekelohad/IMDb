const express = require('express');
const router = express.Router();

const {
  sendMoviesOnLoad,
  getMoviesByName,
  getMovieDetailsByID,
} = require('../controllers/movieController');

router.get('/movies/', sendMoviesOnLoad);
router.get('/movies/:movieTitle', getMoviesByName);
router.get('/movie/:movieId', getMovieDetailsByID);

module.exports = router;
