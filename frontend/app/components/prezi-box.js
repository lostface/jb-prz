'use strict';

const
  React = require('react'),
  SortByCont = require('../containers/sort-by-cont'),
  PreziListCont = require('../containers/prezi-list-cont');

module.exports = PreziBox;

function PreziBox() {
  return (
    <div>
      <SortByCont />
      <PreziListCont />
    </div>
  );
}
