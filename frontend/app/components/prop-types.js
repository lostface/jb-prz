'use strict';

const React = require('react');

const SortByPropType = React.PropTypes.oneOf(['', 'title', 'createdAt']);

const CreatorPropTypes = {
  name: React.PropTypes.string,
  profileUrl: React.PropTypes.string // TODO url, uri to be more specific
};

const PreziPropTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  thumbnail: React.PropTypes.string, // TODO url, uri to be more specific
  creator: React.PropTypes.shape(CreatorPropTypes),
  createdAt: React.PropTypes.string,
};

const PreziArrPropType = React.PropTypes.arrayOf(
  React.PropTypes.shape(PreziPropTypes)
);

module.exports = {
  PreziArrPropType,
  PreziPropTypes,
  SortByPropType,
};
