'use strict';

const
  React = require('react'),
  { Layout, Header, Textfield, Drawer, Navigation, Content } = require('react-mdl'),
  PreziBox = require('./prezi-box'),
  { PreziArrPropType, SortByPropType } = require('./prop-types'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

module.exports = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    prezis: PreziArrPropType,
    searchText: React.PropTypes.string,
    sortBy: SortByPropType,
    sortAscending: React.PropTypes.bool,
    onSearchTextChange: React.PropTypes.func,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange:  React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      prezis: [],
      searchText: '',
      sortBy: '',
      sortAscending: true,
      // TODO noOp func instead
      onSearchTextChange: () => {},
      onSortByChange: () => {},
      onSortAscendingChange:  () => {},
    };
  },

  render() {
    const {
      prezis,
      searchText,
      sortBy,
      sortAscending,
      onSearchTextChange,
      onSortByChange,
      onSortAscendingChange,
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
          <PreziBox {...
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
  },
});
