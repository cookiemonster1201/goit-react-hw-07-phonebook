import Container from 'layout/Container';
import Header from 'layout/Header/Header';
import Hero from 'layout/Hero/Hero';
import Contacts from 'layout/Contacts/Contacts';
import Footer from 'layout/Footer/Footer';

export default function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Contacts />
      <Footer />
    </Container>
  );
}
