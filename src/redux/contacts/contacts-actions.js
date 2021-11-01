import * as contactsActions from './contacts-actionTypes';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const saveContact = createAction(
  contactsActions.SAVE_CONTACT,
  ({ name, number }) => ({
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  }),
);

export const deleteContact = createAction(contactsActions.DELETE_CONTACT);
export const fetchContactRequest = createAction(
  contactsActions.FETCH_CONTACTS_REQUEST,
);
export const fetchContactSuccess = createAction(
  contactsActions.FETCH_CONTACTS_SUCCESS,
);
export const fetchContactError = createAction(
  contactsActions.FETCH_CONTACTS_ERROR,
);
