'use strict';

const
  { createStore, applyMiddleware } = require('redux'),
  thunk = require('redux-thunk').default,
  rootReducer = require('./reducers');

module.exports = configureStore;

function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
