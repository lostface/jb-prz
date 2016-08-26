'use strict';

const
  React = require('react'),
  { List } = require('immutable'),
  { Layout, Header, Textfield, Drawer, Navigation, Content } = require('react-mdl'),
  PreziBox = require('./prezi-box'),
  { PrezisPropType, SortByPropType } = require('./prop-types'),
  ImmutableRenderMixin = require('react-immutable-render-mixin');

module.exports = React.createClass({
  mixins: [ImmutableRenderMixin],

  propTypes: {
    prezis: PrezisPropType,
    searchText: React.PropTypes.string,
    sortBy: SortByPropType,
    sortAscending: React.PropTypes.bool,
    onSearchTextChange: React.PropTypes.func,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange:  React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      prezis: List(),
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
            }
          } />
        </Content>
      </Layout>
    );
  },
});
