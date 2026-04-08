# useCallback

#### 🧩 Requirements

1. Use useMemo to memoize:

- Filtered user list
- Expensive computation

2. Use useCallback to memoize:

- Event handlers passed to child components
- “useCallback is only useful when a function is passed as a prop to child components.
- React.memo
- “useMemo is used to memoize expensive derived values, while useCallback is used to memoize function references passed to memoized children. In this version, useCallback is necessary because the handler is passed to React.memo-wrapped components, and referential equality affects re-rendering.”
- (useCallback) Memoizes function references.
- (useCallback) Use when passing functions to memoized children (React.memo).
- (useCallback) Do not use for local-only functions.
- (React.memo) Skips re-render when props references are unchanged.
- (React.memo) Requires stable object and function references.
- (React.memo) function TodoList({ todos, onSelect }) {} →
- const TodoList = React.memo(({ todos, onSelect }) => {})

```js
function TodoList({ todos, onSelect }) {}
const TodoList = React.memo(({ todos, onSelect }) => {});
```

```js
const handleName = useCallback((name) => {
  alert(name);
}, []);

const handleEvent = useCallback(() => {}, []);
```

## 2026-04-06: useCallback (Quiz 1)

```js
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
  function handleSelect(product) {
    setSelectedProduct(product);
  }

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
```
