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

//get
export const deleteContact = createAction(contactsActions.DELETE_CONTACT);
export const fetchContactsRequest = createAction(
  contactsActions.FETCH_CONTACTS_REQUEST,
);
export const fetchContactsSuccess = createAction(
  contactsActions.FETCH_CONTACTS_SUCCESS,
);
export const fetchContactsError = createAction(
  contactsActions.FETCH_CONTACTS_ERROR,
);

//post
export const addContactRequest = createAction(
  contactsActions.ADD_CONTACT_REQUEST,
);
export const addContactSuccess = createAction(
  contactsActions.ADD_CONTACT_SUCCESS,
);
export const addContactError = createAction(contactsActions.ADD_CONTACT_ERROR);

//delete
export const deleteContactRequest = createAction(
  contactsActions.DELETE_CONTACT_REQUEST,
);
export const deleteContactSuccess = createAction(
  contactsActions.DELETE_CONTACT_SUCCESS,
);
export const deleteContactError = createAction(
  contactsActions.DELETE_CONTACT_ERROR,
);
