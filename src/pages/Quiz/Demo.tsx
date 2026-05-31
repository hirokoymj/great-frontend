import { useMemo, useState } from 'react';
import './styles.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ProductProps {
  products: Product[];
}

const products: Product[] = [
  { id: 1, name: 'iPhone 15', category: 'Electronics', price: 999 },
  { id: 2, name: 'Samsung TV', category: 'Electronics', price: 700 },
  { id: 3, name: 'Coffee Mug', category: 'Home', price: 12 },
  { id: 4, name: 'Desk Lamp', category: 'Home', price: 35 },
  { id: 5, name: 'MacBook Air', category: 'Electronics', price: 1199 },
  { id: 6, name: 'Office Chair', category: 'Furniture', price: 220 },
  { id: 7, name: 'Dining Table', category: 'Furniture', price: 450 },
  { id: 8, name: 'Headphones', category: 'Electronics', price: 199 },
];

export default function Demo() {
  return <ProductList products={products} />;
}

function ProductList({ products }: ProductProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  //   let computedProducts = products.filter((p) =>
  //     p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //   );

  //   computedProducts =
  //     category !== 'All'
  //       ? products.filter((p) => p.category === category)
  //       : computedProducts;

  //   computedProducts = [...computedProducts].sort((a, b) => {
  //     if (sortBy === 'price-low-high') {
  //       return a.price - b.price;
  //     } else if (sortBy === 'price-high-low') {
  //       return b.price - a.price;
  //     }
  //     return 0;
  //   });

  const computedProducts = useMemo(() => {
    let computedData: Product[] =
      category !== 'All'
        ? products.filter((p) => p.category === category)
        : products;
    return [...computedData].sort((a, b) => {
      if (sortBy === 'price-low-high') {
        return a.price - b.price;
      } else if (sortBy === 'price-high-low') {
        return b.price - a.price;
      }
      return 0;
    });
    return computedData;
  }, [searchTerm, category, sortBy]);

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
