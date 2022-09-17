import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function LoggedInHeader() {
  return (
    <Navbar style={{ height: '60px' }} bg="dark" variant="dark">
      <Container>
        <Link style={{ fontStyle: 'none', textDecoration: 'none', color: 'white' }} to="/">My City</Link>
        <Nav className="mr-auto">
          <Link
            style={{
              fontStyle: 'none', textDecoration: 'none', color: 'white', marginRight: '8px',
            }}
            to="/profile"
          >
            My Account
          </Link>
          <Link
            style={{
              fontStyle: 'none', textDecoration: 'none', color: 'white', marginRight: '8px',
            }}
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{
              fontStyle: 'none', textDecoration: 'none', color: 'white', marginRight: '8px',
            }}
            to="/logout"
          >
            Logout
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default LoggedInHeader;
