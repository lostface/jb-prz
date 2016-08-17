'use strict';

const
  React = require('react'),
  { Grid, Cell, Switch, RadioGroup, Radio } = require('react-mdl'),
  { SortByPropType } = require('./prop-types');

module.exports = SortBy;

function SortBy(props) {
  const {
    sortBy,
    sortAscending,
    onSortByChange,
    onSortAscendingChange
  } = props;

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
              onChange={e => onSortByChange(e.target.value)}>
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
}

SortBy.defaultProps = {
  sortBy: '',
  sortAscending: true,
  onSortByChange: () => {},
  onSortAscendingChange: () => {},
};

SortBy.propTypes = {
  sortBy: SortByPropType,
  sortAscending: React.PropTypes.bool,
  onSortByChange: React.PropTypes.func,
  onSortAscendingChange: React.PropTypes.func,
};
