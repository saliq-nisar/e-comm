import React from 'react';
import ProductCard from '../components/ProductCardd';
import productsData from '../data/Products';
import { useCart } from '../context/CartContext'; // ✅

import '../styles/Home.css';

const Home = () => {
  const { addItem } = useCart(); // ✅ use addItem here

  return (
    <div className="home-container">
      <h1>Welcome to ShopZone</h1>
      <div className="products-grid">
        {productsData.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addItem} // ✅ pass addItem
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
