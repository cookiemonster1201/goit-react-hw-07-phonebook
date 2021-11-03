import styled from 'styled-components';
import { getContacts, getIsLoading } from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const Div = styled.div``;
const H2 = styled.h2``;

export default function ContactsFilter() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {isLoading ? (
        <Loader
          type="Oval"
          color="#da5f01"
          height={80}
          width={80}
          style={{ margin: '0 auto' }}
        />
      ) : contacts.length > 0 ? (
        <>
          <H2>Contacts</H2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>Nothing here yet</p>
      )}
    </>
  );
}
