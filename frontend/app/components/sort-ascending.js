'use strict';

const  React = require('react');

module.exports = SortAscending;

function SortAscending(props) {
  const {ascending, onChange} = props;

  return (
    <div className="sort-ascending">
      <input
        id="sort-ascending"
        type="checkbox"
        checked={ascending}
        onChange={e => onChange(e.target.checked)}
      />
      <label htmlFor="sort-ascending">Ascending</label>
    </div>
  );
}
