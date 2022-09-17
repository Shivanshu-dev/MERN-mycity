import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductCard from '../components/ProductCard/ProductCard';
import './ShopPage.css';

function ShopPage() {
  const [key, setKey] = useState('home');

  return (
    <div className="container store-container">

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <ProductCard />
        </Tab>
        <Tab eventKey="About" title="About">
          About will render here
        </Tab>
      </Tabs>

    </div>
  );
}

export default ShopPage;
