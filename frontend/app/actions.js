'use strict';

const fetch = require('isomorphic-fetch');

const
  REQUEST_PREZIS = 'REQUEST_PREZIS',
  RECEIVE_PREZIS = 'RECEIVE_PREZIS',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_SORT_ASCENDING = 'SET_SORT_ASCENDING',
  SET_SORT_BY = 'SET_SORT_BY';

module.exports = {
  REQUEST_PREZIS,
  RECEIVE_PREZIS,
  SET_SEARCH_TEXT,
  SET_SORT_ASCENDING,
  SET_SORT_BY,

  fetchPrezis,
  setSearchText,
  setSortAscending,
  setSortBy,
};

function requestPrezis() {
  return {
    type: REQUEST_PREZIS
  };
}

function receivePrezis(prezis) {
  return {
    type: RECEIVE_PREZIS,
    prezis
  };
}

function fetchPrezis(options) {
  const { searchText, sortBy, sortAscending } = options;

  return dispatch => {
    dispatch(requestPrezis());
    // TODO empty param exclusion ?
    // TODO from config
    return fetch(
        `https://quiet-island-87638.herokuapp.com/prezis?search=${searchText}&orderBy=${sortBy}&descending=${!sortAscending}`,
        // `http://localhost:3000/prezis?search=${searchText}&orderBy=${sortBy}&descending=${!sortAscending}`,
        { mode: 'cors' }
      )
      .then(response => response.json())
      .then(prezis => dispatch(receivePrezis(prezis)));
  };
}

function setSearchText(searchText) {
  return {
    type: SET_SEARCH_TEXT,
    searchText
  };
}

function setSortAscending(sortAscending) {
  return {
    type: SET_SORT_ASCENDING,
    sortAscending
  };
}

function setSortBy(sortBy) {
  return {
    type: SET_SORT_BY,
    sortBy
  };
}
