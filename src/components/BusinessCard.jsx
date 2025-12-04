import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

export default function BusinessCard({ name, formatted_address, rating, place_id }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-1">{name}</Card.Title>
        <Card.Text className="text-muted small">{formatted_address}</Card.Text>
        <Badge bg="warning" text="dark" className="me-2">★ {rating || 'N/A'}</Badge>
        <Button
          variant="outline-primary"
          size="sm"
          href={`https://www.google.com/maps/place/?q=place_id:${place_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Directions
        </Button>
      </Card.Body>
    </Card>
  );
}
