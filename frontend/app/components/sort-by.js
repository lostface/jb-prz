'use strict';

const
  React = require('react'),
  { Grid, Cell, Switch, RadioGroup, Radio } = require('react-mdl'),
  { SortByPropType } = require('./prop-types'),
  ImmutableRenderMixin = require('react-immutable-render-mixin');

module.exports = React.createClass({
  mixins: [ImmutableRenderMixin],

  propTypes: {
    sortBy: SortByPropType,
    sortAscending: React.PropTypes.bool,
    onSortByChange: React.PropTypes.func,
    onSortAscendingChange: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      sortBy: '',
      sortAscending: true,
      onSortByChange: () => {},
      onSortAscendingChange: () => {},
    };
  },

  // this is needed because the actual event is click for radio buttons so the
  // same value may occur more than once which is not really a change
  handleSortByChange(e) {
    const
      newValue = e.target.value,
      { sortBy, onSortByChange } = this.props;

    if (newValue !== sortBy) {
      onSortByChange(newValue);
    }
  },

  render() {
    const {
      sortBy,
      sortAscending,
      onSortAscendingChange
    } = this.props;

    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={1} align="middle">
            <h4>Sort by</h4>
          </Cell>

          <Cell col={2} align="middle">
            <RadioGroup
                container="ul"
                childContainer="li"
                style={{listStyleType: 'none'}}
                name="sortBy"
                value={sortBy}
                onChange={this.handleSortByChange}>
              <Radio value="" ripple>-</Radio>
              <Radio value="title">Title</Radio>
              <Radio value="createdAt">Creation Date</Radio>
            </RadioGroup>
          </Cell>

          <Cell col={1} align="middle">
            <Switch
                label="Ascending"
                ripple
                checked={sortAscending}
                onChange={e => onSortAscendingChange(e.target.checked)}>
              Ascending
            </Switch>
          </Cell>
        </Grid>
      </div>
    );
  },
});
