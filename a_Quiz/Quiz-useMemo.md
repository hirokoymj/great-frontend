# Quiz - useMemo

- [Quiz - useMemo](#quiz---usememo)
  - [Q0: Learn React - Escape Hatches](#q0-learn-react---escape-hatches)
  - [Q1: useMemo (Products)- 04/06](#q1-usememo-products--0406)
    - [Answer](#answer)
    - [Improvement (draft)](#improvement-draft)
  - [Q2: useMemo (Shopping Cart) - 04/06](#q2-usememo-shopping-cart---0406)
    - [Answer](#answer-1)

✅❌

## Q0: Learn React - Escape Hatches

- [Escape Hatches](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#escape-hatches)
- [You Might Not Need an Effect](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#you-might-not-need-an-effect)

## Q1: useMemo (Products)- 04/06

**📋 Requirements**

- Use useMemo to create a computedProducts array
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

### Answer

```js
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const computedProducts = useMemo(() => {
    let result = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (sortBy === "price-low-high") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchTerm, category, sortBy]);

```

### Improvement (draft)

```js
- `useMemo(fn, [A, B, C])`
- ❓ “How do I know which state changed?”
-  👉 You don’t check inside useMemo
- ❗ useMemo does NOT tell you which state changed
- sort() mutates the array.
- ⚠️ 2. Bigger question: Should products be state?
- 👉 In your case: NO products is static data,
- You are not modifying it (no add/delete/update)
- 🔥 Derived Data Rule (THIS is the key concept) - Never store derived data in state
```

---

## Q2: useMemo (Shopping Cart) - 04/06

**📋 Requirements**

🧾 Scenario

- items (price × quantity)
- discount code
- tax rate

**👉 You must compute:**

- Subtotal, Discount amount, Tax, Final total

```js
import { useMemo, useState } from 'react';
import './styles.css';

const initialCart = [
  { id: 1, name: 'Laptop', price: 1200, qty: 1 },
  { id: 2, name: 'Mouse', price: 25, qty: 2 },
  { id: 3, name: 'Keyboard', price: 75, qty: 1 },
];

export default function App() {
  const [cart, setCart] = useState(initialCart);
  const [discountCode, setDiscountCode] = useState('');
  const [taxRate, setTaxRate] = useState(0.1); // 10%

  // TODO 1:
  // Calculate subtotal using useMemo

  // TODO 2:
  // Apply discount:
  // SAVE10 → 10%
  // SAVE20 → 20%
  // otherwise 0%

  // TODO 3:
  // Calculate tax after discount

  // TODO 4:
  // Calculate final total

  return (
    <div className="app">
      <h1>Shopping Cart</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} × {item.qty}
          </li>
        ))}
      </ul>

      <div className="controls">
        <input
          placeholder="Discount code (SAVE10)"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />

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
      <p>Subtotal: ???</p>
      <p>Discount: ???</p>
      <p>Tax: ???</p>
      <h2>Total: ???</h2>
    </div>
  );
}
```

### Answer

```js
import { useMemo, useState } from 'react';
import './styles.css';

const initialCart = [
  { id: 1, name: 'Laptop', price: 1200, qty: 1 },
  { id: 2, name: 'Mouse', price: 25, qty: 2 },
  { id: 3, name: 'Keyboard', price: 75, qty: 1 },
];

export default function App() {
  const [cart, setCart] = useState(initialCart);
  const [discountCode, setDiscountCode] = useState('');
  const [taxRate, setTaxRate] = useState(0.1);

  const output = useMemo(() => {
    let items = [...cart];

    const subtotal = items.reduce((acc, currentVal) => {
      return acc + currentVal.price * currentVal.qty;
    }, 0);

    let discountRate = 0;
    if (discountCode === 'SAVE10') {
      discountRate = 0.1;
    } else if (discountCode === 'SAVE20') {
      discountRate = 0.2;
    }

    const discount = subtotal * discountRate;
    const tax = (subtotal - discount) * taxRate;
    const total = subtotal - discount + tax;

    return { subtotal, discount, tax, total };
  }, [cart, discountCode, taxRate]);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} × {item.qty}
          </li>
        ))}
      </ul>

      <div className="controls">
        <input
          placeholder="Discount code (SAVE10)"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />

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

      <p>Subtotal: ${output.subtotal.toFixed(2)}</p>
      <p>Discount: ${output.discount.toFixed(2)}</p>
      <p>Tax: ${output.tax.toFixed(2)}</p>
      <h2>Total: ${output.total.toFixed(2)}</h2>
    </div>
  );
}
```
