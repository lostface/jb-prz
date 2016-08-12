'use strict';

const  React = require('react');

module.exports = SearchBar;

function SearchBar(props) {
  const {searchText, onChange} = props;

  return (
    <div className="search-bar">
      <input
        type="search"
        value={searchText}
        onChange={e => onChange(e.target.value)}
        placeholder="Search..." />
    </div>
  );
}
