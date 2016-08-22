'use strict';

const
  React = require('react'),
  { connect } = require('react-redux'),
  { fetchPrezis, setSearchText, setSortBy, setSortAscending } = require('../actions'),
  { PreziArrPropType, SortByPropType } = require('../components/prop-types'),
  Main = require('../components/main'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

const App = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    dispatch: React.PropTypes.func,
    prezis: PreziArrPropType,
    searchText: React.PropTypes.string,
    sortBy: SortByPropType,
    sortAscending: React.PropTypes.bool,
    onSearchTextChange: React.PropTypes.func,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange: React.PropTypes.func,
  },

  componentDidMount() {
    const {
      dispatch,
      searchText,
      sortBy,
      sortAscending
    } = this.props;

    dispatch(fetchPrezis({ searchText, sortBy, sortAscending }));
  },

  componentWillReceiveProps(nextProps) {
    const
      {
        dispatch,
        searchText: newSearchText,
        sortBy: newSortBy,
        sortAscending: newSortAscending
      } = nextProps,

      {
        searchText: oldSearchText,
        sortBy: oldSortBy,
        sortAscending: oldSortAscending
      } = this.props;

    // TODO extract as a func
    // TODO debounce can be applied here on dispatch call

    if (newSearchText != oldSearchText ||
        newSortBy != oldSortBy ||
        ((newSortAscending != oldSortAscending) && (newSortBy))) {

      dispatch(fetchPrezis({
        searchText: newSearchText,
        sortBy: newSortBy,
        sortAscending: newSortAscending,
      }));
    }
  },

  render() {
    return <Main {...this.props}/>;
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// TODO identity func can be used instead as well
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  // TODO compose can be used here
  return {
    dispatch: dispatch,
    onSearchTextChange: searchText => dispatch(setSearchText(searchText)),
    onSortByChange: sortBy => dispatch(setSortBy(sortBy)),
    onSortAscendingChange:  sortAscending => dispatch(setSortAscending(sortAscending)),
  };
}
