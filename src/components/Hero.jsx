import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className="py-5 text-white hero-section">
      <Container>
        <h1 className="display-5 fw-bold">Find Local Businesses in the Philippines</h1>
        <p className="lead">Restaurants, plumbers, doctors, jeepney services — all at your fingertips.</p>
        <Form className="d-flex flex-column flex-md-row gap-2 mt-4" onSubmit={(e) => e.preventDefault()}>
          <Form.Control type="text" placeholder="What are you looking for?" />
          <Form.Control type="text" placeholder="City or Barangay" />
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
      </Container>
    </section>
  );
}
