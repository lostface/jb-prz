'use strict';

const
  React = require('react'),
  { List } = require('immutable'),
  SortBy = require('./sort-by'),
  PreziList = require('./prezi-list'),
  { PrezisPropType } = require('./prop-types'),
  ImmutableRenderMixin = require('react-immutable-render-mixin');

module.exports = React.createClass({
  mixins: [ImmutableRenderMixin],

  propTypes: {
    prezis: PrezisPropType,
    sortBy: React.PropTypes.string,
    sortAscending: React.PropTypes.bool,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      prezis: List(),
      sortBy: '',
      sortAscending: true,
    };
  },

  render() {
    const {
      prezis,
      sortBy,
      sortAscending,
      onSortByChange,
      onSortAscendingChange
    } = this.props;

    return (
      <div>
        <SortBy {...{ sortBy, sortAscending, onSortByChange, onSortAscendingChange }} />
        <PreziList prezis={prezis} />
      </div>
    );
  },
});
