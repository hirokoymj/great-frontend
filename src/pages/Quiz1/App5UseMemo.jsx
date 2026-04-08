import { useMemo, useState } from 'react';
import './styles.css';

const products = [
  { id: 1, name: 'iPhone 15', category: 'Electronics', price: 999 },
  { id: 2, name: 'Samsung TV', category: 'Electronics', price: 700 },
  { id: 3, name: 'Coffee Mug', category: 'Home', price: 12 },
  { id: 4, name: 'Desk Lamp', category: 'Home', price: 35 },
  { id: 5, name: 'MacBook Air', category: 'Electronics', price: 1199 },
  { id: 6, name: 'Office Chair', category: 'Furniture', price: 220 },
  { id: 7, name: 'Dining Table', category: 'Furniture', price: 450 },
  { id: 8, name: 'Headphones', category: 'Electronics', price: 199 },
];

export default function App5UseMemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  // Add here
  const [items, setItems] = useState(products);

  const computedProducts = useMemo(() => {
    let output = [...products]; ///My Quesiton - can I use items?===
    console.log({ searchTerm, category, sortBy }); //{searchTerm: '', category: 'All', sortBy: 'default'}

    if (category !== 'All') {
      output = output.filter((p) => p.category === category);
    }

    const searchKey = searchTerm.trim().toLowerCase();
    if (searchKey) {
      output = output.filter((p) => p.name.toLowerCase().includes(searchKey));
    }

    if (sortBy === 'price-low-high') {
      output = [...output].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      output = [...output].sort((a, b) => b.price - a.price);
    }

    return output;
  }, [searchTerm, category, sortBy]);

  //   const computedProducts = useMemo(() => {
  //     let output = [...products]; // copy first

  //     // 1. Filter by category
  //     if (category !== 'All') {
  //       output = output.filter((p) => p.category === category);
  //     }

  //     // 2. Filter by search
  //     const searchKey = searchTerm.trim().toLowerCase();
  //     if (searchKey) {
  //       output = output.filter((p) => p.name.toLowerCase().includes(searchKey));
  //     }

  //     // 3. Sort
  //     if (sortBy === 'price-low-high') {
  //       output = [...output].sort((a, b) => a.price - b.price);
  //     } else if (sortBy === 'price-high-low') {
  //       output = [...output].sort((a, b) => b.price - a.price);
  //     }

  //     return output;
  //   }, [searchTerm, category, sortBy]);

  return (
    <div className="app">
      <h1>Product Search</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Home">Home</option>
          <option value="Furniture">Furniture</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <p>
        <strong>Results:</strong> {computedProducts.length}
      </p>

      <ul className="product-list">
        {computedProducts.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span>
            <span>{product.category}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
