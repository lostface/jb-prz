'use strict';

const
  React = require('react'),
  fetch = require('isomorphic-fetch'),
  { Layout, Header, Textfield, Drawer, Navigation, Content } = require('react-mdl'),
  PreziList = require('../components/prezi-list');

module.exports = React.createClass({
  getInitialState() {
    return {
      prezis: [],
      searchText: '',
      sortBy: '',
      sortAscending: true,
    };
  },

  getDefaultProps() {
    return {};
  },

  componentDidMount() {
    const {
      searchText,
      sortBy,
      sortAscending
    } = this.state;

    this.fetchPrezis({ searchText, sortBy, sortAscending });
  },

  componentWillUpdate(nextProps, nextState) {
    const
      {
        searchText: newSearchText,
        sortBy: newSortBy,
        sortAscending: newSortAscending
      } = nextState,

      {
        searchText: oldSearchText,
        sortBy: oldSortBy,
        sortAscending: oldSortAscending
      } = this.state;

    // TODO extract as a func
    // TODO debounce can be applied here on dispatch call

    if (newSearchText != oldSearchText ||
        newSortBy != oldSortBy ||
        ((newSortAscending != oldSortAscending) && (newSortBy))) {

      this.fetchPrezis({
        searchText: newSearchText,
        sortBy: newSortBy,
        sortAscending: newSortAscending,
      });
    }
  },

  fetchPrezis(options) {
    const { searchText, sortBy, sortAscending } = options;

    // TODO empty param exclusion ?
    // TODO from config
    return fetch(
        `https://quiet-island-87638.herokuapp.com/prezis?search=${searchText}&orderBy=${sortBy}&descending=${!sortAscending}`,
        // `http://localhost:3000/prezis?search=${searchText}&orderBy=${sortBy}&descending=${!sortAscending}`,
        { mode: 'cors' }
      )
      .then(response => response.json())
      .then(data => this.setState({...this.state, prezis: data}));
  },

  handleSearchTextChange(searchText) {
    this.setState({...this.state, searchText});
  },

  handleSortByChange(sortBy) {
    this.setState({...this.state, sortBy});
  },

  handleSortAscendingChange(sortAscending) {
    this.setState({...this.state, sortAscending});
  },

  render() {
    const {
      prezis,
      searchText,
      sortBy,
      sortAscending,
    } = this.state;

    return (
      <Layout fixedHeader>
        <Header title="PREZiS">
          <Textfield
            value={searchText}
            onChange={e => this.handleSearchTextChange(e.target.value)}
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
          <PreziList {...
            {
              prezis,
              sortBy,
              sortAscending,
              onSortByChange: this.handleSortByChange,
              onSortAscendingChange: this.handleSortAscendingChange
            }} />
        </Content>
      </Layout>
    );
  },
});
