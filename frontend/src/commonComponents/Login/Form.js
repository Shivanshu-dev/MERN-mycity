import React from 'react';
import LoginSignup from '../Buttons/LoginSignup';
import LoginForm from './LoginForm';
import Register from './RegisterUser/Register';

const Form = () => {
  return (
    <div className='container'>
  <LoginForm />
  <Register />
    <LoginSignup type='Register' />
    </div>
  )
}

export default Form