import styled from 'styled-components';

import Container from 'components/Container';
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const H1 = styled.h1`
  margin-bottom: 40px;
  font-size: 50px;
  text-align: center;
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <H1>Phone book</H1>
      <ContactsForm />
      <Div>
        <H2>Contacts</H2>
        <Filter />
        <ContactsList />
      </Div>
    </Container>
  );
}
