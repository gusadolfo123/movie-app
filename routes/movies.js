const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/', async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next) {
    try {
      const {
        title,
        year,
        cover,
        description,
        duration,
        contentRating,
        source,
        tags
      } = req.body;

      const movie = {
        title,
        year,
        cover,
        description,
        duration,
        contentRating,
        source,
        tags
      };

      res.status(201).json({
        data: movie,
        message: 'movie created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async function(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const movie = (await Promise.resolve(moviesMock)).filter(
        x => x.id === id
      );

      res.status(200).json({
        data: movie,
        message: 'movie listed'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
