import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
