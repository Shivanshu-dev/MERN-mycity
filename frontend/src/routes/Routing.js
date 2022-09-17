import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Cart from '../pagesContainer/Cart';
import Home from '../pagesContainer/Home';
import LoginRegister from '../pagesContainer/LoginRegister';
import NoMatch from '../pagesContainer/NoMatch';
import Product from '../pagesContainer/Product';
import Profile from '../pagesContainer/Profile';
import ShopPage from '../pagesContainer/ShopPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/shop/:id" element={<ShopPage />} />
      <Route path="/shop/:id/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Routing;
