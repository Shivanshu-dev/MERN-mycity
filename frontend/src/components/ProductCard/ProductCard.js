import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './ProductCard.css';

function ProductCard() {
  return (
    <div className="productcard-container">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            <Form.Group className="mb-3">
              <Form.Label>Variant Selector</Form.Label>
              <Form.Select>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
            <p>Shop description what the shop sells</p>
            <Button variant="outline-secondary">Price</Button>
          </Card.Text>
          <Button variant="primary">Toggle Quantity</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
