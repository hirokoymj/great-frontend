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
  const filtered = PRODUCTS.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  // TODO: Use useMemo to calculate total price of filtered products
  const total = useMemo(() => {
    if (filtered.length === 0) return 0;
    return filtered.reduce((acc, currentVal) => (acc = acc + currentVal), 0);
  }, [filtered]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map(({ id, name, price }) => (
          <li key={id}>
            {name} ${price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total Price: ${total}</h3>
    </div>
  );
}
