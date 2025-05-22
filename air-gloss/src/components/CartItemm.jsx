import React from 'react';
import '../styles/CartItem.css';

const CartItemm = ({ item, onAdd, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="cart-item-actions">
          <button onClick={() => onRemove(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onAdd(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItemm;