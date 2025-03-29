import React from 'react';
import './index.css';

const Product = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>₹{price}</p>
      <button onClick={onAddToCart}>🛒 Add to Cart</button>
    </div>
  );
};

export default Product;
