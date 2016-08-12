'use strict';

const {
  RECEIVE_PREZIS,
  SET_SEARCH_TEXT,
  SET_SORT_BY,
  SET_SORT_ASCENDING
} = require('./actions');

module.exports = reducer;

const defaultState = {
  prezis: [],
  searchText: '',
  sortBy: '',
  sortAscending: true,
};

function reducer(state=defaultState, action) {
  switch(action.type) {
    case RECEIVE_PREZIS:
      return { ...state, prezis: action.prezis };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    case SET_SORT_BY: ;
      return { ...state, sortBy: action.sortBy };
    case SET_SORT_ASCENDING: ;
      return { ...state, sortAscending: action.sortAscending };
    default:
      return state;
  }
}
