'use strict';

const jsonfile = require('jsonfile');

const JsonDataService = {
  /**
   *@param {String} file
   */
  init(file) {
    this.file = file;
    this.data = null;
  },

  /**
   *@param {Function (err, data)} cb
   */
  getData(cb) {
    if (this.data) {
      return process.nextTick(() => cb(null, this.data.slice()));
    }

    return jsonfile.readFile(this.file, jsonReadCb.bind(this));

    function jsonReadCb(err, data) {
      if (err) { return cb(err); }

      this.data = data;
      return cb(null, this.data.slice());
    }
  }
};

module.exports = JsonDataService;
