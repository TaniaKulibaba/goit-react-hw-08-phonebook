import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactSuccess,
  addContactsError,
  removeContactsRequest,
  removeContactSuccess,
  removeContactsError,
  changeFilter
} from "./phonebook-actions";

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) => state.filter((el) => el.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactsError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: () => 'Error! Loading of phonebook is impossible',
  [addContactsError]: () => 'Adding contact is mistakenly',
  [removeContactsError]: () => 'Wrong removing',
});

export default combineReducers({ items, filter, loading, error });