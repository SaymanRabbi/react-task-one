import React, { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../image/logo-small.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = ({ setValue, details }) => {
  console.log(details);
    const [inputdata, setInputdata] = useState('');
    return (
        
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
                <Nav.Link href="#link" className='text-white fs-5 me-3'>Cart<FontAwesomeIcon className='fs-4 ms-1 text-warning' icon={faCartShopping} /><sup className='fw-bold text-danger fs-4'>{details.length}</sup> </Nav.Link>
                                <input type="text" className='input' onChange={e=>setInputdata(e.target.value)} />
                <button className='button' onClick={() => { setValue(inputdata) }}>Serch</button>
                
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </nav>
       
    );
};

export default Header;