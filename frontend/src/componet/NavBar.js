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
        <NavDropdown.Item>About</NavDropdown.Item>
        <NavDropdown.Item>Details</NavDropdown.Item>
        <NavDropdown.Item>Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default NavigationBar;
