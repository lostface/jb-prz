'use strict';

const
  React = require('react'),
  { connect } = require('react-redux'),
  { fetchPrezis, setSearchText, setSortBy, setSortAscending } = require('../actions'),
  { Layout, Header, Textfield, Drawer, Navigation, Content } = require('react-mdl'),
  PreziList = require('../components/prezi-list');

const App = React.createClass({
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
    const {
      prezis,
      searchText,
      sortBy,
      sortAscending,
      onSearchTextChange,
      onSortByChange,
      onSortAscendingChange
    } = this.props;

    return (
      <Layout fixedHeader>
        <Header title="PREZiS">
          <Textfield
            value={searchText}
            onChange={e => onSearchTextChange(e.target.value)}
            label="Search"
            expandable
            expandableIcon="search"
          />
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <p>About</p>
          </Navigation>
        </Drawer>
        <Content>
          <PreziList {...{ prezis, sortBy, sortAscending, onSortByChange, onSortAscendingChange }} />
        </Content>
      </Layout>
    );
  },
})

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// TODO identity func can be used instead as well
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch, ownProps) {
  // TODO compose can be used here
  return {
    dispatch: dispatch,
    onSearchTextChange: searchText => dispatch(setSearchText(searchText)),
    onSortByChange: sortBy => dispatch(setSortBy(sortBy)),
    onSortAscendingChange:  sortAscending => dispatch(setSortAscending(sortAscending)),
  };
}
