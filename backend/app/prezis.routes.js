var
  express = require('express'),
  router = express.Router();

module.exports = router;

router
  .get('/', listPrezis)
  .get('/:preziId', findPrezi);

function listPrezis(req, res) {
  // TODO implement
  // TODO [req.query.search]
  // TODO [req.query.orderBy]
  res.send(req.query);
}

function findPrezi(req, res) {
  // TODO implement
  res.send(req.params)
}
