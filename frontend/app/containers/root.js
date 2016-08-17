'use strict';

const
  React = require('react'),
  Provider = require('react-redux').Provider,
  configureStore = require('../configure-store'),
  App = require('../containers/app');

const store = configureStore();

module.exports = Root;

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
