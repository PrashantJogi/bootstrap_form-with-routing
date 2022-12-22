import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from 'react-router';


function Home() {
   const [value , setValue] = useState("")
   
   
    return (
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/User" target="_blank">
                Users
              </Nav.Link>
              {/* <Nav.Link href="/Form" target="_blank">
                Form
              </Nav.Link> */}
              <Nav.Link href="/Form" target="_blank">
                Form
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <nav>
          <Outlet context={{ value, setValue }} />
        </nav>
      </>
    );
}

export default Home;