var
  express = require('express'),
  router = express.Router();

module.exports = router;

router
  .get('/', findAll)
  .get('/:preziId', findById);

function findAll(req, res) {
  const
    query = req.query,
    search = query.search,
    orderBy = query.orderBy,
    descending = query.descending,
    prezisService = req.app.locals.prezisService;

  prezisService.findAll({ search: search, orderBy: orderBy, descending: descending }, findAllCb);

  function findAllCb(err, data) {
    // TODO error handling
    res.json(data);
  }
}

function findById(req, res) {
  const
    preziId = req.params.preziId,
    prezisService = req.app.locals.prezisService;

  prezisService.findById(preziId, findByIdCb);

  function findByIdCb(err, data) {
    // TODO error handling
    // TODO prezi not exists case?
    res.json(data);
  }
}
