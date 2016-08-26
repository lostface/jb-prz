'use strict';

const
  React = require('react'),
  ImmutablePropTypes = require('react-immutable-proptypes');

const SortByPropType = React.PropTypes.oneOf(['', 'title', 'createdAt']);

const CreatorPropTypes = {
  name: React.PropTypes.string.isRequired,
  profileUrl: React.PropTypes.string.isRequired // TODO url, uri to be more specific
};

const PreziPropTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.string.isRequired, // TODO url, uri to be more specific
  creator: ImmutablePropTypes.contains(CreatorPropTypes).isRequired,
  createdAt: React.PropTypes.string.isRequired,
};

const PrezisPropType = ImmutablePropTypes.listOf(
  ImmutablePropTypes.contains(PreziPropTypes)
);

module.exports = {
  PrezisPropType,
  PreziPropTypes,
  SortByPropType,
};
