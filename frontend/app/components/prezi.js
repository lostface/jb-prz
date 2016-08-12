'use strict';

const
  React = require('react'),
  { Card, CardTitle, CardText } = require('react-mdl');

module.exports = Prezi;

function Prezi(props) {
  const {
    title,
    thumbnail,
    creator,
    createdAt
  } = props;

  return (
    <Card shadow={0} style={{width: '400px', height: '400px', margin: 'auto'}}>
      <CardTitle
          expand
          style={{
            color: '#fff',
            height: '400px',
            background: `url(${thumbnail}) bottom right 15% no-repeat #46B6AC`}
          }>
        {title}
      </CardTitle>
      <CardText>
        {createdAt} by {creator.name}
      </CardText>
    </Card>
  );
}
