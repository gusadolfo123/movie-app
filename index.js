const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandlers');

const {
  pruebaHandler,
  pruebaHandler2
} = require('./utils/middleware/pruebaHandler');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// CONFIG CORS
app.use(cors());

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

moviesApi(app);

// MIDDLEWARES
app.use(notFoundHandler); // catch error 404
// app.use(pruebaHandler);
// app.use(pruebaHandler2);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
