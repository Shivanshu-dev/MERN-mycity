import React, { useState } from 'react';
import LoginSignup from '../Buttons/LoginSignup';
import LoginForm from './LoginForm';
import Register from './RegisterUser/Register';

function Form() {
  const [showLogin, setShowLogin] = useState(true);

  const loginToggler = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className="container">
      {showLogin ? <LoginForm />
        : <Register />}
      <LoginSignup toggleRegister={loginToggler} type="Register" />
    </div>
  );
}

export default Form;
