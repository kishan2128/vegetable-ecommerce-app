import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🍀 सब्जी ई-कॉमर्स</div>
      <ul>
        <li><a href="/">होम</a></li>
        <li><a href="/products">प्रोडक्ट्स</a></li>
        <li><a href="/cart">कार्ट 🛒</a></li>
        <li><a href="/contact">संपर्क करें</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
