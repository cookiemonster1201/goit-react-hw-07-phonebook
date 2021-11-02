import axios from 'axios';
import * as actions from 'redux/contacts/contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const response = await axios.get(`/contacts`);
    const contacts = Object.values(response.data);
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());
  try {
    const response = await axios.post(`/contacts`, contact);
    const newContact = response.data;
    dispatch(actions.addContactSuccess(newContact));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};
