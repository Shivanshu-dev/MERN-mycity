import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShopCard() {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Shop Name</Card.Title>
        <Card.Text>
          Shop description what the shop sells
          <Button variant="outline-danger">Shop Timing Variant toggle if open close</Button>
        </Card.Text>
        <Button variant="primary">Go to shop byonClick</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;
