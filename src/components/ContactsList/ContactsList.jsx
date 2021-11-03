import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import ContactsListItem from 'components/ContactsListItem';
import { useSelector } from 'react-redux';

import {
  getIsLoading,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 470px;
  font-size: 20px;
  color: #495057;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default function ContactsList() {
  const isLoading = useSelector(getIsLoading);
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      {isLoading ? (
        <Loader
          type="Oval"
          color="#da5f01"
          height={80}
          width={80}
          style={{ textAlign: 'center', padding: '35px' }}
        />
      ) : filteredContacts.length > 0 ? (
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
        <p
          style={{
            color: '#495057',
            fontSize: '20px',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          Sorry, no contacts found
        </p>
      )}
    </>
  );
}
