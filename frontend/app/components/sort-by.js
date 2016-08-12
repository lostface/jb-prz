'use strict';

const  React = require('react');

module.exports = SortBy;

function SortBy(props) {
  const {sortBy, onChange} = props;

  return (
    <div className="sort-by">
      <label htmlFor="sort-by">Sort by</label>
      <select
          id="sort-by"
          value={sortBy}
          onChange={e => onChange(e.target.value)}>
        {/* TODO this can be generated from an array */}
        <option value="">-</option>
        <option value="title">Title</option>
        <option value="createdAt">Creation Date</option>
      </select>
    </div>
  );
}
