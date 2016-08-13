'use strict';

const
  React = require('react'),
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

    // TODO
      console.warn('TODO fetchPrezis')
    // fetchPrezis({ searchText, sortBy, sortAscending });
  },

  componentWillReceiveProps(nextProps) {
    // TODO probably state will be needed instead, because props is empty for App :)
    const
      {
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

      // TODO
      console.warn('TODO fetchPrezis')
      // fetchPrezis({
      //   searchText: newSearchText,
      //   sortBy: newSortBy,
      //   sortAscending: newSortAscending,
      // });
    }
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
