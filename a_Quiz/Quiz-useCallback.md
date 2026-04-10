# Quiz - useCallback

- [Quiz - useCallback](#quiz---usecallback)
  - [Q0: Learn React](#q0-learn-react)
  - [Q1: useCallback (Objects)- 04/06](#q1-usecallback-objects--0406)
    - [Answer](#answer)
    - [Improvement](#improvement)

<!-- create index  cmd+Shift+P -->
<!--
## Q: State (Objects)- mm/dd
**📋 Requirements**
```js
```
### Answer
```js
```
### Improvement (draft)
-->

**Prompt**

```
Pleas make a quiz for useCallback hook.  Here is the requirement.
1. One jsx file. the file is included child components.
2. Use "import { useState, useCallback, memo } from 'react';".
3. The one jsx file is important in order to review a quiz in my tech note
```

✅❌

## Q0: Learn React

- [Escape Hatches](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#escape-hatches)

## Q1: useCallback (Objects)- 04/06

**📋 Requirements**

Features

- Show a list of products
- Each product row has a Select button
- Show the currently selected product name
- Add an unrelated Theme Toggle button
- ProductItem should be memoized with memo
- Use useCallback so ProductItem does not re-render unnecessarily when only the theme changes

```js
//Starter Boilerplate
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

### Answer

```js
// Your code is correct. Nice work.
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
```

### Improvement

```js
- ProductItem is memoized, it can skip re-rendering when its props do not change.
- memo can skip unnecessary re-render
- With useCallback, ProductItem is not unnecessarily re-rendered when darkMode changes.
```
