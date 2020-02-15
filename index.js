const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

moviesApi(app);

// MIDDLEWARES
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
