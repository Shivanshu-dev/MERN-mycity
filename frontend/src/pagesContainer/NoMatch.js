import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoMatch() {
  const navigate = useNavigate();
  const sendHome = () => {
    navigate('/');
  };
  return (
    <div className="container">
      <h1>
        No Match for this route available .
        <u style={{ color: 'blue', cursor: 'pointer' }} onClick={sendHome}>Please Redirect to homepage.</u>
      </h1>
    </div>
  );
}

export default NoMatch;
