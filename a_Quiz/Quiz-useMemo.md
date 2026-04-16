# Quiz - useMemo

- [Quiz - useMemo](#quiz---usememo)
	- [Q0: Learn React - Escape Hatches](#q0-learn-react---escape-hatches)
	- [Q1: useMemo (Products)- 04/06 ❌](#q1-usememo-products--0406-)
		- [Answer](#answer)
		- [Improvement](#improvement)
	- [Q2: useMemo (Shopping Cart) - 04/06 ❌](#q2-usememo-shopping-cart---0406-)
		- [Answer](#answer-1)
	- [Q3:React.memo + object props ❌](#q3reactmemo--object-props-)
		- [Answer](#answer-2)
	- [Q4: useMemo dependency array ❌](#q4-usememo-dependency-array-)

✅❌

## Q0: Learn React - Escape Hatches

- [Escape Hatches](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#escape-hatches)
- [You Might Not Need an Effect](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#you-might-not-need-an-effect)

## Q1: useMemo (Products)- 04/06 ❌

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

### Improvement

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

## Q2: useMemo (Shopping Cart) - 04/06 ❌

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

## Q3:React.memo + object props ❌

**Is there a problem with this useMemo usage?**

A) No problem — items never changes so an empty dependency array is correct ❌
B) Yes — items should be in the dependency array since it's used inside useMemo ✅
C) Yes — useMemo cannot be used with reduce, use useCallback instead
D) Yes — useMemo requires at least one dependency, empty array is invalid

```js
function App() {
  const [count, setCount] = useState(0);

  const items = [1, 2, 3, 4, 5]; // a new array reference each time! ⚠️

  // useMemo with [] never re-runs even if items changed
  const total = useMemo(() => {
    console.log('calculating total...');
    return items.reduce((acc, item) => acc + item, 0);
  }, []);

  return (
    <div>
      <p>Total: {total}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Answer

- items is defined inside the component, which means it's recreated as a new array reference on every render.

```js
// ✅ Option 1 — add items to deps
const total = useMemo(() => {
  return items.reduce((acc, item) => acc + item, 0);
}, [items]);

// ✅ Option 2 — move items outside component (truly never changes)
const items = [1, 2, 3, 4, 5]; // defined outside, stable reference
```

- The golden rule: always list every variable used inside useMemo/useEffect in the dependency array — even if you think it won't change!

## Q4: useMemo dependency array ❌

**Why does Child re-render every time "Increment" is clicked, despite using React.memo?**

A) React.memo doesn't work with object props ❌
B) style is a new object reference on every render, so React.memo's shallow comparison sees it as changed ✅
C) React.memo only prevents re-renders when no props are passed
D) The color property inside style changes on every render

```js
function Parent() {
  const [count, setCount] = useState(0);

  const style = { color: 'red' }; // new reference each time! ⚠️

  return (
    <>
      <Child style={style} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

const Child = React.memo(({ style }) => {
  console.log('Child rendered');
  return <p style={style}>Hello</p>;
});
```
