import React from 'react';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">🇵🇭 Philippine Yellow Pages</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Form className="d-flex gap-2">
              <Form.Control type="text" placeholder="What do you need?" size="sm" />
              <Button variant="outline-light" size="sm">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
