import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import Products from '../data/Products';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = Products.find(p => p.id === parseInt(id));
  const [zoom, setZoom] = useState(false);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details-container">
      <div 
        className={`product-image ${zoom ? 'zoomed' : ''}`} 
        onClick={() => setZoom(!zoom)} 
        title={zoom ? 'Click to zoom out' : 'Click to zoom in'}
      >
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <h2 className="product-price">${product.price.toFixed(2)}</h2>
        <button className="add-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
