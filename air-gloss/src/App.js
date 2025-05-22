import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';

import { CartProvider } from './context/CartContext';

// ✅ Wrapper to conditionally render Navbar
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <main style={{ padding: '0px',
  minHeight: '100vh',
  maxWidth: '100vw',
  margin: '0 auto'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
}

export default App;
