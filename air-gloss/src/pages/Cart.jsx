import React from 'react';
import { useCart } from '../context/CartContext';
import CartItemm from '../components/CartItemm';

const Cart = () => {
  const { cartItems, addItem, decreaseQuantity } = useCart(); // ✅ using functions from context

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItemm
            key={item.id}
            item={item}
            onAdd={addItem} // ✅ pass addItem directly
            onRemove={decreaseQuantity} // ✅ pass decreaseQuantity directly
          />
        ))
      )}
    </div>
  );
};

export default Cart;
