const express = require('express');
const MoviesService = require('../services/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movie');

const validateHandler = require('../utils/middleware/validationHandler');

function moviesApi(app) {
  const router = express.Router();

  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {
    try {
      const { tags } = req.query;
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:movieId',
    validateHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      try {
        const { movieId } = req.params;
        const movie = await moviesService.getMovie({ movieId });

        res.status(200).json({
          data: movie,
          message: 'movie listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/', validateHandler(createMovieSchema), async function(
    req,
    res,
    next
  ) {
    try {
      const { body: movie } = req;
      const createdMovieId = await moviesService.createMovie({ movie });

      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put(
    '/:movieId',
    validateHandler({ movieId: movieIdSchema }, 'params'),
    validateHandler(updateMovieSchema),
    async function(req, res, next) {
      try {
        const { movieId } = req.params;
        const { body: movie } = req;
        const createdMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });

        res.status(201).json({
          data: createdMovieId,
          message: 'movie updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:movieId',
    validateHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      try {
        const { movieId } = req.params;
        const createdMovieId = await moviesService.deleteMovie({ movieId });

        res.status(201).json({
          data: createdMovieId,
          message: 'movie deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
