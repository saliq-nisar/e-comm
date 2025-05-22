import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css'; // or wherever your styles are

const ProductCardd = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          onAddToCart(product);
          alert('Added to cart')
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardd;
