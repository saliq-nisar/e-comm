import products from '../data/Products'; // your products array

// Simulates fetching all products (could be async to mimic API)
const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // simulate network delay
  });
};

// Get a single product by ID
const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      if (product) resolve(product);
      else reject(new Error('Product not found'));
    }, 300);
  });
};

// Search products by title or description (case-insensitive)
const searchProducts = (query) => {
  const q = query.trim().toLowerCase();
  return products.filter(product =>
    product.title.toLowerCase().includes(q) ||
    (product.description && product.description.toLowerCase().includes(q))
  );
};

// Filter products by category (string)
const filterByCategory = (category) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export {
  fetchProducts,
  getProductById,
  searchProducts,
  filterByCategory,
};
