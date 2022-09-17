import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import './CitySelector.css';

function CitySelector() {
  const [showSelector, setShowSelector] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname && pathname === '/') {
      setShowSelector(() => true);
    } else {
      setShowSelector(() => false);
    }
  }, [pathname]);

  return (
    <div style={{ display: showSelector ? 'block' : 'none' }} className="container">
      <div className="city-container">
        <Form.Group className="mb-3">
          <Form.Label>Select your City</Form.Label>
          <Form.Select>
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  );
}

export default CitySelector;
