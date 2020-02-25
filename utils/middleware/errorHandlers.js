const { config } = require('../../config/index');
const boom = require('@hapi/boom');

function withErrorStack(error, stack) {
  if (config.dev) {
    // return { error, stack }; sin boom
    return { ...error, stack };
  }
  return { ...error, stack };
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err;

  // res.status(err.status || 500);
  // res.json(withErrorStack(err.message, err.stack));
  res.status(statusCode || 500);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
  wrapErrors
};
