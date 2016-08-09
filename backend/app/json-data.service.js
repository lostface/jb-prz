var jsonfile = require('jsonfile');

module.exports = {
  init: init,
  getData: getData,
};

/**
 *@param {String} file
 */
function init(file) {
  this.file = file;
  this.data = null;
}

/**
 *@param {Function (err, data)} cb
 */
function getData(cb) {
  if (this.data) {
    return process.nextTick(() => cb(null, this.data.slice()));
  }

  jsonfile.readFile(this.file, jsonReadCb.bind(this));

  function jsonReadCb(err, data) {
    if (err) { return cb(err); }

    this.data = data;
    return cb(null, this.data.slice());
  }
}
