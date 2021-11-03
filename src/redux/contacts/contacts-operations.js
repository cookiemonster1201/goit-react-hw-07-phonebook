import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as actions from 'redux/contacts/contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/contacts`);
      return Object.values(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());
//   try {
//     const response = await axios.get(`/contacts`);
//     const contacts = Object.values(response.data);
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error.message));
//   }
// };

// export const addContact = contact => async dispatch => {
//   dispatch(actions.addContactRequest());
//   try {
//     const response = await axios.post(`/contacts`, contact);
//     const newContact = response.data;
//     dispatch(actions.addContactSuccess(newContact));
//   } catch (error) {
//     dispatch(actions.addContactError(error));
//   }
// };

// export const deleteContact = id => async dispatch => {
//   dispatch(actions.deleteContactRequest());
//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(actions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(actions.deleteContactError(error));
//   }
// };
