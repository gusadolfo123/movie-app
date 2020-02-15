const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongodb = new MongoLib();
  }

  async getMovies({ tags }) {
    // const movies = await Promise.resolve(moviesMock);
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongodb.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    // const movie = (await Promise.resolve(moviesMock)).filter(x => x.id === id);
    const movie = await this.mongodb.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    // const movie = await Promise.resolve(moviesMock)[0];
    const createdMovieId = await this.mongodb.create(this.collection, movie);
    return createdMovieId || {};
  }

  async updateMovie({ movieId, movie }) {
    // const movie = (await Promise.resolve(moviesMock)).filter(x => x.id === id);
    const updateMovieId = await this.mongodb.update(
      this.collection,
      movieId,
      movie
    );
    return updateMovieId || {};
  }

  async deleteMovie({ movieId }) {
    // const movie = (await Promise.resolve(moviesMock)).filter(x => x.id === id);
    const deletedMovieId = await this.mongodb.delete(this.collection, movieId);
    return deletedMovieId || {};
  }
}

module.exports = MoviesService;
