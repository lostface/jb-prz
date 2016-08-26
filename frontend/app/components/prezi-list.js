'use strict';

const
  React = require('react'),
  { List } = require('immutable'),
  { Grid, Cell } = require('react-mdl'),
  Prezi = require('./prezi'),
  { PrezisPropType } = require('./prop-types'),
  ImmutableRenderMixin = require('react-immutable-render-mixin');

module.exports = React.createClass({
  mixins: [ImmutableRenderMixin],

  propTypes: {
    prezis: PrezisPropType,
  },

  getDefaultProps() {
    return {
      prezis: List(),
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
      prezi = prezi.toObject();
      return (
        <Cell col={4} key={prezi.id}>
          <Prezi {...prezi} />
        </Cell>
      );
    }
  },
});
