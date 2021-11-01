import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filter } from 'redux/filter/filter-reducer';
import * as actionTypes from './contacts-actionTypes';
import addContact from 'utils/add-contact';
import deleteContact from 'utils/delete-contact';

export const items = createReducer([], {
  [actionTypes.SAVE_CONTACT]: (state, { payload }) =>
    addContact(state, payload),
  [actionTypes.DELETE_CONTACT]: (state, { payload }) =>
    deleteContact(state, payload),
  [actionTypes.FETCH_CONTACTS_SUCCESS]: (_, { payload }) => payload,
});

export const isLoading = createReducer(false, {
  [actionTypes.FETCH_CONTACTS_REQUEST]: () => true,
  [actionTypes.FETCH_CONTACTS_SUCCESS]: () => false,
  [actionTypes.FETCH_CONTACTS_ERROR]: () => false,
});

export const error = createReducer(null, {
  [actionTypes.FETCH_CONTACTS_REQUEST]: () => {},
  [actionTypes.FETCH_CONTACTS_ERROR]: (_, { payload }) => payload,
});

export const contacts = combineReducers({
  items,
  filter,
  isLoading,
  error,
});
