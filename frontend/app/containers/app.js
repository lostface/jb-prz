'use strict';

const
  React = require('react'),
  { connect } = require('react-redux'),
  { fetchPrezis, setSearchText } = require('../actions'),
  { SortByPropType } = require('../components/prop-types'),
  Main = require('../components/main');

const App = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    searchText: React.PropTypes.string,
    sortBy: SortByPropType,
    sortAscending: React.PropTypes.bool,
    onSearchTextChange: React.PropTypes.func,
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
    const { searchText, onSearchTextChange } = this.props;
    return <Main {...{ searchText, onSearchTextChange }}/>;
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// TODO identity func can be used instead as well
function mapStateToProps(state) {
  // TODO _.pick like func
  const { searchText, sortBy, sortAscending } = state;
  return { searchText, sortBy, sortAscending };
}

function mapDispatchToProps(dispatch) {
  // TODO compose can be used here
  return {
    dispatch: dispatch,
    onSearchTextChange: searchText => dispatch(setSearchText(searchText)),
  };
}
