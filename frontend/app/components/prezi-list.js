'use strict';

const
  React = require('react'),
  Prezi = require('./prezi'),
  SortBy = require('./sort-by'),
  SortAscending = require('./sort-ascending');

module.exports = PreziList;

function PreziList(props) {
  const {
    prezis,
    sortBy,
    sortAscending,
    onSortByChange,
    onSortAscendingChange
  } = props;

  return (
    <div className="prezi-list-container">
      <SortBy sortBy={sortBy} onChange={onSortByChange} />
      <SortAscending ascending={sortAscending} onChange={onSortAscendingChange} />

      <div className="prezi-list">
        {prezis.map(prezi => <Prezi key={prezi.id} {...prezi}   />)}
      </div>
    </div>
  );
}
