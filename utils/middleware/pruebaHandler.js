function pruebaHandler(req, res, next) {
  req.body = { ...req.body, nuevo: 123 };
  console.log(req.body);
  console.log(`Prueba 1 ${JSON.stringify(req.body)}`);

  next();
}

function pruebaHandler2(req, res, next) {
  console.log(`prueba 2 ${JSON.stringify(req.body)}`);
}
module.exports = { pruebaHandler, pruebaHandler2 };
