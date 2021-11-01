import styled from 'styled-components';

import ContactsListItem from 'components/ContactsListItem';
import filterContacts from 'utils/filter-contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getValue, getContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  color: #722317;
  font-weight: bold;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export default function ContactsList() {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const contacts = useSelector(getContacts);

  const filteredContacts = filterContacts(contacts, value);

  return filteredContacts?.length > 0 ? (
    <Ul>
      {[...filteredContacts]
        .sort((contactA, contactB) =>
          contactA.name.localeCompare(contactB.name),
        )
        .map(contact => (
          <Li key={contact.id}>
            <ContactsListItem contact={contact} />
          </Li>
        ))}
    </Ul>
  ) : (
    <p>No contacts found</p>
  );
}
