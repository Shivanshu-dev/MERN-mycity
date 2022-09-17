import React from 'react';
import Form from 'react-bootstrap/Form';

function Profile() {
  return (
    <div className="container">
      Edit your profile information

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control disabled type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="current name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="current name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="current name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="current name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="current name" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Profile;
