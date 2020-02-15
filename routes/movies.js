const express = require('express');
const MoviesService = require('../services/movies');

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

  router.get('/:id', async function(req, res, next) {
    try {
      const { id } = req.params;
      const movie = await moviesService.getMovie(id);

      res.status(200).json({
        data: movie,
        message: 'movie listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next) {
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

  router.put('/:id', async function(req, res, next) {
    try {
      const { id } = req.params;
      const { body: movie } = req;
      const createdMovieId = await moviesService.updateMovie({ id, movie });

      res.status(201).json({
        data: createdMovieId,
        message: 'movie updated'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async function(req, res, next) {
    try {
      const { id } = req.params;
      const createdMovieId = await moviesService.deleteMovie({ id });

      res.status(201).json({
        data: createdMovieId,
        message: 'movie deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
