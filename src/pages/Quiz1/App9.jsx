import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true },
  { id: 2, name: 'Chair', price: 150, inStock: false },
  { id: 3, name: 'Notebook', price: 5, inStock: true },
];

export default function App() {
  const [toggle, setToggle] = useState(false);

  const inStockData = toggle ? products.filter((p) => p.inStock) : products;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Product Inventory</h1>
      <input
        type="checkbox"
        checked={toggle}
        onChange={(e) => {
          setToggle(e.target.checked);
        }}
      />{' '}
      In Stock
      <ul>
        {inStockData.map(({ id, name, price, inStock }) => (
          <li key={id}>
            {name} - ${price} -{' '}
            <span style={{ color: inStock ? 'green' : 'red' }}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
