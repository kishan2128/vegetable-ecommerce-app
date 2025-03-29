import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="container">
      <h1>सब्जी ई-कॉमर्स ऐप में आपका स्वागत है! 🥦🍅🥕</h1>
      <p>आप यहां से ताजी सब्जियां ऑनलाइन खरीद सकते हैं। 💻🛒</p>

      <div className="products">
        <div className="product">
          <h2>टमाटर</h2>
          <p>₹40 प्रति किलो</p>
          <button>खरीदें</button>
        </div>

        <div className="product">
          <h2>आलू</h2>
          <p>₹25 प्रति किलो</p>
          <button>खरीदें</button>
        </div>

        <div className="product">
          <h2>प्याज</h2>
          <p>₹30 प्रति किलो</p>
          <button>खरीदें</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
