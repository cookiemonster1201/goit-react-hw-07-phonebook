import axios from 'axios';
import * as actions from 'redux/contacts/contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());
  try {
    const contacts = await axios.get(`/contacts`);
    const v = Object.values(contacts.data);
    dispatch(actions.fetchContactSuccess(v));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};
