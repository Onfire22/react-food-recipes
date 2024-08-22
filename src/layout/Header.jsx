import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='header' bg="dark" data-bs-theme="dark">
    <Container className='header_links'>
      <Navbar.Brand href="/#">React Food App</Navbar.Brand>
      <Nav>
        <NavLink className="nav_link" to="/">Recipes</NavLink>
        <NavLink className="nav_link">Random Meal</NavLink>
        <NavLink className="nav_link" to="https://github.com/Onfire22/react-food-recipes" target='_blank'>Github Repo</NavLink>
      </Nav>
    </Container>
    </Navbar>
  );
};

export default Header;