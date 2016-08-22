'use strict';

const
  React = require('react'),
  { Layout, Header, Textfield, Drawer, Navigation, Content } = require('react-mdl'),
  PreziBoxCont = require('../containers/prezi-box-cont'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

module.exports = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    searchText: React.PropTypes.string,
    onSearchTextChange: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      searchText: '',
      // TODO noOp func instead
      onSearchTextChange: () => {},
    };
  },

  render() {
    const {
      searchText,
      onSearchTextChange,
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
          <PreziBoxCont />
        </Content>
      </Layout>
    );
  },
});
