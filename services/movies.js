const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie(id) {
    const movie = (await Promise.resolve(moviesMock)).filter(x => x.id === id);
    return movie || {};
  }

  async createMovie(params) {
    const movie = await Promise.resolve(moviesMock)[0];
    return movie || {};
  }

  async updateMovie(id, params) {
    const movie = (await Promise.resolve(moviesMock)).filter(x => x.id === id);
    return movie || {};
  }

  async deleteMovie(id) {
    const movie = (await Promise.resolve(moviesMock)).filter(x => x.id === id);
    return movie || {};
  }
}

module.exports = MoviesService;
