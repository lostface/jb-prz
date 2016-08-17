'use strict';

const
  React = require('react'),
  { Layout, Header, Textfield, Drawer, Navigation, Content } = require('react-mdl'),
  PreziList = require('./prezi-list'),
  { PreziArrPropType, SortByPropType } = require('./prop-types');

module.exports = Main;

function Main(props) {
  const {
    prezis,
    searchText,
    sortBy,
    sortAscending,
    onSearchTextChange,
    onSortByChange,
    onSortAscendingChange,
  } = props;

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
        <PreziList {...
          {
            prezis,
            sortBy,
            sortAscending,
            onSortByChange,
            onSortAscendingChange
          }} />
      </Content>
    </Layout>
  );
}

Main.defaultProps = {
  prezis: [],
  searchText: '',
  sortBy: '',
  sortAscending: true,
  // TODO noOp func instead
  onSearchTextChange: () => {},
  onSortByChange: () => {},
  onSortAscendingChange:  () => {},
};

Main.propTypes = {
  prezis: PreziArrPropType,
  searchText: React.PropTypes.string,
  sortBy: SortByPropType,
  sortAscending: React.PropTypes.bool,
  onSearchTextChange: React.PropTypes.func,
  onSortByChange: React.PropTypes.func,
  onSortAscendingChange:  React.PropTypes.func,
};
