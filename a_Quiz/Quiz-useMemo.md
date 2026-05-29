# Quiz - useMemo

- [Quiz - useMemo](#quiz---usememo)
	- [Q0: Learn React - Escape Hatches](#q0-learn-react---escape-hatches)
	- [Q1: useMemo (filter by category)- ❌(04/06), ❌(05/25), ❌(05/29)](#q1-usememo-filter-by-category--0406-0525-0529)
		- [Answer - without useMemo](#answer---without-usememo)
		- [Answer](#answer)
	- [Q2: useMemo (Shopping Cart) - 04/06 ❌, 05/29✅](#q2-usememo-shopping-cart---0406--0529)
		- [Answer](#answer-1)
		- [TypeScript](#typescript)

✅❌

## Q0: Learn React - Escape Hatches

- [Escape Hatches](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#escape-hatches)
- [You Might Not Need an Effect](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#you-might-not-need-an-effect)

## Q1: useMemo (filter by category)- ❌(04/06), ❌(05/25), ❌(05/29)

- Filtered product list
- Filter by searchTerm
- Filter by category
- Sort by sortBy

```js
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

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  // TODO:
  // Use useMemo to create a computedProducts array
  // 1. Filter by searchTerm
  // 2. Filter by category
  // 3. Sort by sortBy
  const computedProducts = products;

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
```

### Answer - without useMemo

```js
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

export default function Demo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  let computedProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  computedProducts =
    category !== 'All'
      ? products.filter((p) => p.category === category)
      : computedProducts;

  computedProducts = [...computedProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') {
      return a.price - b.price;
    } else if (sortBy === 'price-high-low') {
      return b.price - a.price;
    }
  });

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
```

### Answer

```js
const computedProducts = useMemo(() => {
  let computedProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  computedProducts =
    category !== 'All'
      ? products.filter((p) => p.category === category)
      : computedProducts;

  computedProducts = [...computedProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') {
      return a.price - b.price;
    } else if (sortBy === 'price-high-low') {
      return b.price - a.price;
    }
  });
  return computedProducts; //✅
}, [searchTerm, category, sortBy]);
```

## Q2: useMemo (Shopping Cart) - 04/06 ❌, 05/29✅

- Compute a subtotal, discount, tax and total first.
- Then convert the computed values with `useMemo()`.

```js
import { useMemo, useState } from 'react';
import './styles.css';

const initialCart = [
  { id: 1, name: 'Laptop', price: 1200, qty: 1 },
  { id: 2, name: 'Mouse', price: 25, qty: 2 },
  { id: 3, name: 'Keyboard', price: 75, qty: 1 },
];

let nextId = 4;
export default function App() {
  const [cart, setCart] = useState(initialCart);
  const [discountRate, setDiscountRate] = useState(0.2);
  const [taxRate, setTaxRate] = useState(0.1); // 10%
  //TODO - Compute a subtotal, discount, tax and total first.
  //TODO - then computed values to useMemo().

  const addItem = () => {
    const newItem = { id: nextId++, name: 'dummy', price: 10, qty: 1 };
    setCart((items) => [...items, newItem]);
  };

  const deleteItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };
  //TODO
  const computedValue = useMemo(() => {}, []);
  //TODO
  const { subTotal, discount, tax, total } = computedValue;

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {cart.map(({ id, name, price, qty }) => (
          <li key={id}>
            <span>
              {name}, ${price}, {qty}
            </span>
            <button onClick={() => deleteItem(id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className="controls">
        <label>
          Discount Rate:
          <input
            type="number"
            step="0.01"
            value={discountRate}
            onChange={(e) => setDiscountRate(Number(e.target.value))}
          />
        </label>

        <label>
          Tax Rate:
          <input
            type="number"
            step="0.01"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
          />
        </label>
      </div>

      <hr />

      {/* TODO: Display all calculated values */}
      <p>Subtotal: {}</p>
      <p>Discount: {}</p>
      <p>Tax: {}</p>
      <h2>Total: {}</h2>
    </div>
  );
}
```

### Answer

```js
export default function App() {
  const [cart, setCart] = useState(initialCart);
  const [discountRate, setDiscountRate] = useState(0.2);
  const [taxRate, setTaxRate] = useState(0.1); // 10%

  const addItem = () => {
    const newItem = { id: nextId++, name: 'dummy', price: 10, qty: 1 };
    setCart((items) => [...items, newItem]);
  };

  const deleteItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };
  const computedValue = useMemo(() => {
    const subTotal = cart.reduce(
      (acc, currentVal) => acc + currentVal.price * currentVal.qty,
      0,
    );
    const discount = subTotal * discountRate;
    const tax = (subTotal - discount) * taxRate;
    const total = subTotal - discount + tax;
    return { subTotal, discount, tax, total };
  }, [cart, discountRate, taxRate]);

  const { subTotal, discount, tax, total } = computedValue;
```

### TypeScript

```ts
interface Item {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const initialCart: Item[] = [
  { id: 1, name: 'Laptop', price: 1200, qty: 1 },
  { id: 2, name: 'Mouse', price: 25, qty: 2 },
  { id: 3, name: 'Keyboard', price: 75, qty: 1 },
];
```
