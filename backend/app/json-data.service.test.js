'use strict';

const
  test = require('tape'),
  proxyquire = require('proxyquire'),
  sinon = require('sinon'),
  jsonFileStub = {},
  JsonDataService = proxyquire('./json-data.service', { 'jsonfile': jsonFileStub });

const DUMMY_FILE = 'dummy';
const DUMMY_DATA = 'dummy';

test('init initialization of file property', function(t) {
  const underTest = Object.create(JsonDataService);
  underTest.init(DUMMY_FILE);

  var
    expected = DUMMY_FILE,
    actual = underTest.file;

  t.equal(actual, expected, `init() should set the file property to ${expected}`);

  t.end();
});

test('init initialization of data property', function(t) {
  const underTest = Object.create(JsonDataService);
  underTest.init(DUMMY_FILE);

  var
    expected = null,
    actual = underTest.data;

  t.equal(actual, expected, `init() should set the data property to ${expected}`);

  t.end();
});

test('getData callback calling on first call', function(t) {
  const underTest = Object.create(JsonDataService);
  underTest.init(DUMMY_FILE);

  var readFileStub = jsonFileStub.readFile = sinon.stub();
  readFileStub.callsArgWithAsync(1, null, DUMMY_DATA);

  underTest.getData(cb);

  delete jsonFileStub.readFile;

  function cb(err, data) {
    var
      expected = DUMMY_DATA,
      actual = data;

    t.equal(actual, expected, 'getData() should call the callback with the data read from json');

    t.end();
  }
});

test('getData callback calling on second call', function(t) {
  const underTest = Object.create(JsonDataService);
  underTest.init(DUMMY_FILE);
  underTest.data = DUMMY_DATA;

  jsonFileStub.readFile = sinon.stub();

  underTest.getData(cb);

  delete jsonFileStub.readFile;

  function cb(err, data) {
    var
      expected = DUMMY_DATA,
      actual = data;

    t.equal(actual, expected, 'getData() should call the callback with cached data on second call');

    t.end();
  }
});

test('getData setting of data property on first call', function(t) {
  const underTest = Object.create(JsonDataService);
  underTest.init(DUMMY_FILE);

  var readFileStub = jsonFileStub.readFile = sinon.stub();
  readFileStub.callsArgWithAsync(1, null, DUMMY_DATA);

  underTest.getData(cb);

  delete jsonFileStub.readFile;

  function cb() {
    var
      expected = DUMMY_DATA,
      actual = underTest.data;

    t.equal(actual, expected, 'getData() should set the data property with the read json');

    t.end();
  }
});

test('getData json reading on second call', function(t) {
  const underTest = Object.create(JsonDataService);
  underTest.init(DUMMY_FILE);
  underTest.data = DUMMY_DATA;

  var readFileSpy = jsonFileStub.readFile = sinon.spy();

  underTest.getData(cb);

  delete jsonFileStub.readFile;

  function cb() {
    var
      expected = false,
      actual = readFileSpy.called;

    t.equal(actual, expected, 'getData() should not read the json again on second call');

    t.end();
  }
});
