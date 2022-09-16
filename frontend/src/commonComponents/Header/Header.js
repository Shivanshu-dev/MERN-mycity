import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <Navbar style={{height:'60px'}} bg="dark" variant="dark">
        <Container>
          <Link style={{fontStyle:'none' , textDecoration:'none', color:'white'}} to='/'>My City</Link>
          <Nav className="mr-auto">
            <Link style={{fontStyle:'none' , textDecoration:'none', color:'white'}} to='/login'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header