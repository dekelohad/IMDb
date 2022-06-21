const config = require('config');
const axios = require('axios');

const API_KEY = config.get('omdb.apiKey');
const API_URL = config.get('omdb.uri');

const redisClient = require('../cache/redisCache');
const InitialCacheData = require('../cache/InitialCacheData');

// @route     GET /api/movies
// @desc      retrieves 10 movie data on app loading.

const sendMoviesOnLoad = async (req, res) => {
  const MOVIE_TITLE = 'robin';
  const cacheKey = `__req__${req.url}?${MOVIE_TITLE}`;

  redisClient.set(cacheKey, JSON.stringify(InitialCacheData));
  return res.status(200).json({
    source: 'cache',
    data: InitialCacheData.data,
  });
};

// @route     GET /api/movies/:movieTitle
// @desc      retrieves movie data by name.

const getMoviesByName = async (req, res) => {
  const movieTitle = req.params.movieTitle;
  const cacheKey = `__req__${req.url}?${movieTitle}`;

  try {
    const moviesInCache = await redisClient.get(cacheKey);

    if (moviesInCache) {
      return res.status(200).json({
        source: 'cache',
        data: JSON.parse(moviesInCache),
      });
    }

    const { data } = await axios(
      `${API_URL}/?apikey=${API_KEY}&s=${movieTitle}`
    );

    if (data.Response === 'True') {
      redisClient.set(cacheKey, JSON.stringify(data));
      res.status(200).json({
        source: 'server',
        data: data,
      });
    }
    res.status(405).json({
      error: data.Error,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

// @route     GET /api/movie/:movieId
// @desc      retrieves movie data by id.

const getMovieDetailsByID = async (req, res) => {
  const movieImdbId = req.params.movieId;
  const cacheKey = `__req__${req.url}?${movieImdbId}`;

  try {
    const movieIsInCache = await redisClient.get(cacheKey);

    if (movieIsInCache) {
      return res.status(200).json({
        source: 'cache',
        data: JSON.parse(movieIsInCache),
      });
    }

    const { data } = await axios(
      `${API_URL}/?apikey=${API_KEY}&i=${movieImdbId}`
    );

    if (data.Response === 'True') {
      redisClient.set(cacheKey, JSON.stringify(data));
      res.status(200).json({
        source: 'server',
        data: data,
      });
    } else {
      return res.status(405).json({
        error: data.Error,
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

module.exports = {
  sendMoviesOnLoad,
  getMoviesByName,
  getMovieDetailsByID,
};
