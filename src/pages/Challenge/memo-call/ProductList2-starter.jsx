import { useState, useMemo } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 },
  { id: 4, name: 'Monitor', price: 400 },
];

export default function App() {
  const [search, setSearch] = useState('');

  // TODO: Filter products based on search text

  // TODO: Use useMemo to calculate total price of filtered products

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>{/* TODO: Render filtered products */}</ul>

      <h3>Total Price: ${/* TODO */}</h3>
    </div>
  );
}
