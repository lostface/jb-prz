'use strict';

const
  Immutable = require('immutable'),
  { List } = Immutable,
  {
    RECEIVE_PREZIS,
    SET_SEARCH_TEXT,
    SET_SORT_BY,
    SET_SORT_ASCENDING
  } = require('./actions');

module.exports = reducer;

const defaultState = Immutable.Map({
  prezis: List(),
  searchText: '',
  sortBy: '',
  sortAscending: true,
});

function reducer(state=defaultState, action) {
  // TODO equality check can be generalized
  // TODO validation ? what can be set? TypeScript? :D
  switch (action.type) {
    case RECEIVE_PREZIS: {
      // TODO normalize
      // TODO or check and use existing entities (creator) ...

      // TODO call fromJS here or at call site before action is dispatched?
      return state.set('prezis', Immutable.fromJS(action.prezis));
    }

    case SET_SEARCH_TEXT: {
      return state.set('searchText', action.searchText);
    }

    case SET_SORT_BY: {
      return state.set('sortBy', action.sortBy);
    }

    case SET_SORT_ASCENDING: {
      return state.set('sortAscending', action.sortAscending);
    }

    default:
      return state;
  }
}
