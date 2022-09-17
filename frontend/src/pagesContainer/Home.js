import React from 'react';
import ShopCard from '../components/ShopCard/ShopCard';
import './Home.css';

function Home() {
  return (
    <div className="container shopcard">
      <div className="shop-card-container">
        <ShopCard />
      </div>
    </div>
  );
}

export default Home;
