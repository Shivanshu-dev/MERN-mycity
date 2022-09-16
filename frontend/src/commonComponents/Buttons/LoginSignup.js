import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginSignup = ({type}) => {
  return (
    <Button style={{marginTop:'10px'}} variant="primary" type="submit">
    {type}
  </Button>
  )
}

export default LoginSignup