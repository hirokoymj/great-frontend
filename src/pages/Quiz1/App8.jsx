import { useState, useCallback, memo } from 'react';

const initialProducts = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Keyboard' },
  { id: 3, name: 'Mouse' },
  { id: 4, name: 'Monitor' },
];

export default function App() {
  const [products] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // TODO:
  // Wrap this function with useCallback
  // With useCallback, ProductItem is not unnecessarily re-rendered when darkMode changes
  const handleSelect = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
      }}>
      <h1>useCallback Quiz 2</h1>

      <button onClick={() => setDarkMode((prev) => !prev)}>Toggle Theme</button>

      <h2 style={{ marginTop: '20px' }}>Products</h2>

      <ProductList products={products} onSelect={handleSelect} />

      <p style={{ marginTop: '20px' }}>
        <strong>Selected Product:</strong>{' '}
        {selectedProduct ? selectedProduct.name : 'None'}
      </p>
    </div>
  );
}

function ProductList({ products, onSelect }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
}

const ProductItem = memo(function ProductItem({ product, onSelect }) {
  console.log('Rendering:', product.name);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '6px',
      }}>
      <span>{product.name}</span>
      <button onClick={() => onSelect(product)}>Select</button>
    </div>
  );
});
