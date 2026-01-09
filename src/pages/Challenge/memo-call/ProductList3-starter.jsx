import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 },
  { id: 4, name: 'Monitor', price: 400 },
];

function ProductList({ products, onSelect }) {
  console.log('ProductList rendered');

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => onSelect(product.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [theme, setTheme] = useState('light'); // unrelated state

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <h2>Products</h2>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
        Toggle Theme
      </button>

      <p>Selected Product ID: {selectedId}</p>

      <ProductList products={filteredProducts} onSelect={handleSelect} />
    </div>
  );
}
