'use strict';

const  React = require('react');

module.exports = Prezi;

function Prezi(props) {
  const {
    id,
    title,
    thumbnail,
    creator,
    createdAt
  } = props;

  return (
    <div className="prezi">
      {title} by {creator.name} at {createdAt}
    </div>
  );
}
