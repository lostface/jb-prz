'use strict';

const
  React = require('react'),
  { connect } = require('react-redux'),
  { setSortBy, setSortAscending } = require('../actions'),
  SortBy = require('../components/sort-by');

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByCont);

function SortByCont(props) {
  return <SortBy {...props}/>;
}

SortByCont.propTypes = {
  sortBy: React.PropTypes.string,
  sortAscending: React.PropTypes.bool,
  onSortByChange: React.PropTypes.func,
  onSortAscendingChange: React.PropTypes.func,
};

SortByCont.defaultProps = {
  sortBy: '',
  sortAscending: true,
  onSortByChange: () => {},
  onSortAscendingChange: () => {},
};

function mapStateToProps(state) {
  // TODO _.pick like func
  const { sortBy, sortAscending } = state;
  return { sortBy, sortAscending };
}

function mapDispatchToProps(dispatch) {
  // TODO compose can be used here
  return {
    onSortByChange: sortBy => dispatch(setSortBy(sortBy)),
    onSortAscendingChange: sortAscending => dispatch(setSortAscending(sortAscending)),
  };
}
