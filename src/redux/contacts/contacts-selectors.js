import { createSelector } from 'reselect';

export const getValue = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;

//========== memoised selector ==================
export const getFilteredContacts = createSelector(
  [getContacts, getValue],
  (contacts, filterValue) => {
    return contacts.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue.trim().toLowerCase()),
        )
      : [];
  },
);

// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filterValue = getValue(state);
//   console.log(contacts, filterValue);
//   return contacts.length > 0
//     ? contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterValue.trim().toLowerCase()),
//       )
//     : [];
// };
