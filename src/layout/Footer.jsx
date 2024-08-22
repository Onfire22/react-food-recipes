import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className='footer' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React Food App</Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Footer;