'use strict';

const
  React = require('react'),
  { Grid, Cell } = require('react-mdl'),
  Prezi = require('./prezi'),
  { PreziArrPropType } = require('./prop-types'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

module.exports = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    prezis: PreziArrPropType,
  },

  getDefaultProps() {
    return {
      prezis: [],
    };
  },

  render() {
    const { prezis } = this.props;

    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Grid>{prezis.map(createPreziNode)}</Grid>
      </div>
    );

    function createPreziNode(prezi) {
      return (
        <Cell col={4} key={prezi.id}>
          <Prezi {...prezi} />
        </Cell>
      );
    }
  },
});
