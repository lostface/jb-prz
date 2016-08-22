'use strict';

const
  React = require('react'),
  SortBy = require('./sort-by'),
  PreziList = require('./prezi-list'),
  { PreziArrPropType } = require('./prop-types'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

module.exports = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    prezis: PreziArrPropType,
    sortBy: React.PropTypes.string,
    sortAscending: React.PropTypes.bool,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      prezis: [],
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
