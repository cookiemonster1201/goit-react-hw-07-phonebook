import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </>
  );
}
