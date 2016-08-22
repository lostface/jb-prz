'use strict';

const
  notDeepStrictEqual = require('not_deep_strict_equal'),
  {
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
  // TODO equality check can be generalized
  switch (action.type) {
    case RECEIVE_PREZIS: {
      // TODO normalize
      // TODO or check and use existing entities (creator) ...
      const newValue = action.prezis;
      return notDeepStrictEqual(newValue, state.prezis)
        ? { ...state, prezis: newValue }
        : state;
    }

    case SET_SEARCH_TEXT: {
      const newValue = action.searchText;
      return newValue !== state.searchText
        ? { ...state, searchText: newValue }
        : state;
    }

    case SET_SORT_BY: {
      const newValue = action.sortBy;
      return newValue !== state.sortBy
        ? { ...state, sortBy: newValue }
        : state;
    }

    case SET_SORT_ASCENDING: {
      const newValue = action.sortAscending;
      return newValue !== state.sortAscending
        ? { ...state, sortAscending: newValue }
        : state;
    }

    default:
      return state;
  }
}
