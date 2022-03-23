import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../image/logo-small.png'
import "./Header.css"

const Header = () => {
    return (
        <Navbar className='navbar' expand="lg">
  <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className='text-white fs-5 me-3'>Home</Nav.Link>
        <Nav.Link href="#link"className='text-white fs-5 me-3'>Api</Nav.Link>
        <Nav.Link href="#link"className='text-white fs-5 me-3'>Forum</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;