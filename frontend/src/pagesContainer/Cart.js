import React from 'react';
import CartProduct from '../components/CartItems/CartProduct';
import Checkout from '../components/CartItems/Checkout';

function Cart() {
  return (
    <div className="container">
      This page will show cart items added with price qty and total and subtotal as well
      with checkout button below.  icon with do empty cart

      <CartProduct />
      <Checkout />
    </div>
  );
}

export default Cart;
