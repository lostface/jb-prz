'use strict';

const
  const0 = require('const_0'),
  constTrue = require('const_true'),
  stringComparator = require('string_comparator'),
  strDateComparator = require('str_date_comparator');

const comparators = {
  id: (prezi1, prezi2) => stringComparator(prezi1.id, prezi2.id),
  title: (prezi1, prezi2) => stringComparator(prezi1.title, prezi2.title),
  createdAt: (prezi1, prezi2) => strDateComparator(prezi1.createdAt, prezi2.createdAt),
};

const PrezisService = {
  /**
   * @param {DataService} dataService
   */
  init(dataService) {
    this.dataService = dataService;
  },

  /**
   * @param {Object} options
   * @param {String} options.search
   * @param {String} options.orderBy
   * @param {Boolean} options.descending
   * @param {Function} cb
   * @return {JSON}
   */
  findAll(options, cb) {
    options = options ? options : {};
    this.dataService.getData(dataCb);

    function dataCb(err, data) {
      if (err) { return cb(err); }

      const
        search = options.search,
        orderBy = options.orderBy,
        descending = options.descending;

      data = data
        .filter(getSearchFilter(search))
        .sort(getOrderComparator(orderBy));

      return cb(null, descending ? data.reverse() : data);

      function getSearchFilter(search) {
        search = search ? search.trim().toLowerCase() : '';
        return search ? byTitle : constTrue;

        function byTitle(prezi) {
          const title = prezi.title;
          return title.indexOf(search) != -1;
        }
      }

      function getOrderComparator(orderBy) {
        const comparator = comparators[orderBy];
        return comparator ? comparator : const0;
      }
    }
  },

  /**
   * @param {String} id
   * @param {Function} cb
   * @return {JSON}
   */
  findById(id, cb) {
    this.dataService.getData(dataCb);

    function dataCb(err, data) {
      if (err) { return cb(err); }

      const prezi = data.find(byId);
      return cb(null, prezi);

      function byId(prezi) {
        return prezi.id == id;
      }
    }
  },
};

module.exports = PrezisService;
