import React from 'react';
import Button from 'react-bootstrap/Button';

function LoginSignup({ type, toggleRegister }) {
  const handleClick = () => {
    if (type === 'Register') {
      toggleRegister();
    }
    // on submit redirect user to login after api response
  };

  return (
    // eslint-disable-next-line no-nested-ternary
    <Button onClick={handleClick} style={{ marginTop: '10px' }} variant={type === 'Login' ? 'primary' : type === 'Register' ? 'outline-dark' : type === 'Submit' ? 'success' : ''} type="submit">
      {type}
    </Button>
  );
}

export default LoginSignup;
