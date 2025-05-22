import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItemm';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed! Thank you for shopping.');
    // Clear form or redirect logic can go here
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add items before checking out.</p>
      ) : (
        <div className="checkout-content">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Shipping Details</h2>

            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
              />
            </label>

            <label>
              Address
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Your shipping address"
              />
            </label>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
