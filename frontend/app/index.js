'use strict';

const
  React = require('react'),
  ReactDOM = require('react-dom');

class HelloComponent extends React.Component {
  render() {
    return <p>Hello Out There</p>;
  }
}

ReactDOM.render(
  <HelloComponent />,
  document.getElementById('container')
);
