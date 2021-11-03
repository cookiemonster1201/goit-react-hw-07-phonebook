import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filter } from 'redux/contacts/filter/filter-reducer';
// import * as actions from 'redux/contacts/contacts-actions';
import deleteContactById from 'utils/delete-contact';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';

export const items = createReducer([], {
  //uses asyncThunk
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    deleteContactById(state, payload),
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  // [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  // [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  // [actions.deleteContactSuccess]: (state, { payload }) =>
  // deleteContact(state, payload),
});

export const isLoading = createReducer(false, {
  //uses asyncThunk
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

  // [actions.fetchContactsRequest]: () => true,
  // [actions.fetchContactsSuccess]: () => false,
  // [actions.fetchContactsError]: () => false,
  // [actions.addContactRequest]: () => true,
  // [actions.addContactSuccess]: () => false,
  // [actions.addContactError]: () => false,
  // [actions.deleteContactRequest]: () => true,
  // [actions.deleteContactSuccess]: () => false,
  // [actions.deleteContactError]: () => false,
});

export const error = createReducer(null, {
  //uses asyncThunk
  [fetchContacts.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,

  // [actions.fetchContactsRequest]: () => null,
  // [actions.fetchContactsError]: (_, { payload }) => payload,
  // [actions.addContactRequest]: () => null,
  // [actions.addContactError]: (_, { payload }) => payload,
  // [actions.deleteContactRequest]: () => null,
  // [actions.deleteContactError]: (_, { payload }) => payload,
});

export const contacts = combineReducers({
  items,
  filter,
  isLoading,
  error,
});
