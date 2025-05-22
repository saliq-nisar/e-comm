// Manages cart logic: add, remove, update quantities, and calculate totals

const addItemToCart = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, productId) => {
  const existingItem = cartItems.find(item => item.id === productId);

  if (!existingItem) return cartItems;

  if (existingItem.quantity === 1) {
    return cartItems.filter(item => item.id !== productId);
  }

  return cartItems.map(item =>
    item.id === productId
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItemFromCart = (cartItems, productId) => {
  return cartItems.filter(item => item.id !== productId);
};

const getCartTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const getCartCount = (cartItems) => {
  return cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );
};

export {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getCartTotal,
  getCartCount,
};
