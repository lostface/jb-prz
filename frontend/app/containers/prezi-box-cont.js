'use strict';

const
  React = require('react'),
  { connect } = require('react-redux'),
  { setSortBy, setSortAscending } = require('../actions'),
  { PreziArrPropType } = require('../components/prop-types'),
  PreziBox = require('../components/prezi-box');

const PreziBoxCont = React.createClass({
  propTypes: {
    prezis: PreziArrPropType,
    sortBy: React.PropTypes.string,
    sortAscending: React.PropTypes.bool,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange: React.PropTypes.func,
  },

  render() {
    return <PreziBox {...this.props}/>;
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreziBoxCont);

function mapStateToProps(state) {
  // TODO _.pick like func
  const { prezis, sortBy, sortAscending } = state;
  return { prezis, sortBy, sortAscending };
}

function mapDispatchToProps(dispatch) {
  // TODO compose can be used here
  return {
    onSortByChange: sortBy => dispatch(setSortBy(sortBy)),
    onSortAscendingChange: sortAscending => dispatch(setSortAscending(sortAscending)),
  };
}
