'use strict';

const
  test = require('tape'),
  PrezisService = require('./prezis.service');

test('init initializing of dataService property', function(t) {
  const
    underTest = Object.create(PrezisService),
    dataService = createDataService();

  underTest.init(dataService);

  const
    expected = dataService,
    actual = underTest.dataService;

  t.equal(actual, expected, 'init() should set the dataService property');

  t.end();
});

test('findAll callback calling when no options specified', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = {};

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getDefaultData(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with all data');

    t.end();
  }
});

test('findAll callback calling when search specified', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { search: 'nostrud' };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with the filtered data');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[0], data[2]];
    }
  }
});

test('findAll callback calling when search specified as case sensitive', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { search: 'Nostrud' };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should treat search as case insensitive during filtering');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[0], data[2]];
    }
  }
});

test('findAll callback calling when orderBy is createdAt', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { orderBy: 'createdAt' };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with all data ordered by createdAt');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[0], data[3], data[2], data[1]];
    }
  }
});

test('findAll callback calling when orderBy is title', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { orderBy: 'title' };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with all data ordered by title');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[3], data[0], data[1], data[2]];
    }
  }
});

test('findAll callback calling when orderBy is id', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { orderBy: 'id' };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with all data ordered by id');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[1], data[0], data[3], data[2]];
    }
  }
});

test('findAll callback calling when orderBy is not known', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { orderBy: 'dummy' };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getDefaultData(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with all data without ordering');

    t.end();
  }
});

test('findAll callback calling when orderBy is createdAt and descending', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { orderBy: 'createdAt', descending: true };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with all data ordered by createdAt descending');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[0], data[3], data[2], data[1]].reverse();
    }
  }
});

test('findAll callback calling when search is specified, orderBy is createdAt and descending', function(t) {
  const
    underTest = Object.create(PrezisService),
    options = { search: 'nostrud', orderBy: 'createdAt', descending: true };

  underTest.init(createDataService());
  underTest.findAll(options, cb);

  function cb(err, data) {
    const
      expected = getExpected(),
      actual = data;

    t.looseEqual(actual, expected, 'findAll() should call callback with filtered data ordered by createdAt descending');

    t.end();

    function getExpected() {
      const data = getDefaultData();
      return [data[0], data[2]].reverse();
    }
  }
});

test('findById callback calling when prezi exists with the specified id', function(t) {
  const
    underTest = Object.create(PrezisService),
    id = '4d';

  underTest.init(createDataService());
  underTest.findById(id, cb);

  function cb(err, data) {
    const
      expected = getDefaultData()[2],
      actual = data;

    t.looseEqual(actual, expected, 'findById() should call the callback with the prezi with the specified id');

    t.end();
  }
});

test('findById callback calling when prezi not exists with the specified id', function(t) {
  const
    underTest = Object.create(PrezisService),
    id = '5e';

  underTest.init(createDataService());
  underTest.findById(id, cb);

  function cb(err, data) {
    const
      expected = undefined,
      actual = data;

    t.looseEqual(actual, expected, 'findById() should call the callback with undefined if prezi not exists with the specified id');

    t.end();
  }
});

function createDataService() {
  return {
    getData: cb => cb(null, getDefaultData()),
  };
}

function getDefaultData() {
  return [
    {
      id: '2b',
      title: 'incididunt amet ad nostrud',
      createdAt: 'March 6, 2014',
    },
    {
      id: '1a',
      title: 'Lorem commodo excepteur minim',
      createdAt: 'December 31, 2015',
    },
    {
      id: '4d',
      title: 'Ut ipsum ut nostrud',
      createdAt: 'July 5, 2015',
    },
    {
      id: '3c',
      title: 'anim id enim duis',
      createdAt: 'April 11, 2015',
    },
  ];
}
