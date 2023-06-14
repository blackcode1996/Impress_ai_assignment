import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

// import { LinkContainer } from "react-router-bootstrap";
import logo from "../Assests/logo.png";

const Navigation = () => {

  const navigate=useNavigate()

  function handleClick(){
    navigate("/")
  }

  function makeResume(){
    navigate("/make_resume")
  }


  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "5vh" }}>
      <Container>
        
          <Navbar.Brand onClick={handleClick}>
            <img src={logo} style={{ width: 50, height: 50 }} />
            <span style={{ marginLeft: "7px" }}>
              Make My <span style={{ color: "orange" }}>Resume</span>
            </span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
              <Nav.Link onClick={makeResume}>Make Resume</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
