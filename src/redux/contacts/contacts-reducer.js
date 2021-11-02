import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filter } from 'redux/filter/filter-reducer';
import * as actions from 'redux/contacts/contacts-actions';
import deleteContact from 'utils/delete-contact';

export const items = createReducer([], {
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    deleteContact(state, payload),
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
});

export const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

export const error = createReducer(null, {
  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.addContactRequest]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.deleteContactRequest]: () => null,
  [actions.deleteContactError]: (_, { payload }) => payload,
});

export const contacts = combineReducers({
  items,
  filter,
  isLoading,
  error,
});
