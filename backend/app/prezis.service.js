module.exports = {
  init: init,
  findAll: findAll,
  find: find,
};

/**
 * @param {DataProvider} dataProvider
 */
function init(dataProvider) {
  this.dataProvider = dataProvider;
}

/**
 * @param {String} search
 * @param {String} orderBy
 * @return {JSON}
 */
function findAll(search, orderBy) {
  // TODO implement
}

/**
 * @param {String} id
 * @return {JSON}
 */
function find(id) {
  // TODO implement
}
