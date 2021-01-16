import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <span style={{ padding: '5px' }}>
        <Link to='/'>Home</Link>
      </span>
      <span style={{ padding: '5px' }}>
        <Link to='/results'>Result</Link>
      </span>
      <span style={{ padding: '5px' }}>
        <Link to='/login'>Login</Link>
      </span>

      <NavDropdown title='More' id='basic-nav-dropdown'>
        <NavDropdown.Item href='#action/3.1'>About</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>Details</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default NavigationBar;
