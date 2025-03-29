import React from 'react';
import './index.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
                <button onClick={() => onRemoveFromCart(index)}>❌ Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
