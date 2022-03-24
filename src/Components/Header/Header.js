import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../image/logo-small.png';
import './Header.css'

const Header = (props) => {
    const{setValue}=props
    const [inputdata, setInputdata] = useState('');
    return (
        <div>
            <nav className='header'>
                <Navbar expand="lg">
  <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className='text-white fs-5 me-3'>Home</Nav.Link>
        <Nav.Link href="#link"className='text-white fs-5 me-3'>Api</Nav.Link>
                                <Nav.Link href="#link" className='text-white fs-5 me-3'>Forum</Nav.Link>
                                <input type="text" className='input' onChange={e=>setInputdata(e.target.value)} />
                                <button className='button' onClick={()=>{setValue(inputdata)}}>Serch</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </nav>
        </div>
    );
};

export default Header;<nav>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar></nav>