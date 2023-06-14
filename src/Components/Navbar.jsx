import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: '5vh' }}>
      <Container>
        <Link to="/" style={{textDecoration:"none"}}>
          <Navbar.Brand>
            <img src={logo} style={{ width: 50, height: 50 }} alt="Logo" />
            <span style={{ marginLeft: '7px' }}>
              Make My <span style={{ color: 'orange' }}>Resume</span>
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/make_resume" className="nav-link">
              Make Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
