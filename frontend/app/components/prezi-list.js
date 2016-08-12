'use strict';

const
  React = require('react'),
  { Grid, Cell } = require('react-mdl'),
  SortBy = require('./sort-by'),
  Prezi = require('./prezi');

module.exports = PreziList;

function PreziList(props) {
  const {
    prezis,
    sortBy,
    sortAscending,
    onSortByChange,
    onSortAscendingChange
  } = props;

  const preziNodes =
    prezis.map(prezi => {
      return (
        <Cell col={4} key={prezi.id}>
          <Prezi {...prezi} />
        </Cell>
      );
    })

  return (
    <div>
      <SortBy {...{ sortBy, sortAscending, onSortByChange, onSortAscendingChange }} />

      <div style={{width: '80%', margin: 'auto'}}>
        <Grid>{preziNodes}</Grid>
      </div>
    </div>
  );
}
