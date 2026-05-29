import { useMemo, useState } from 'react';

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

let nextId = 4;
export default function Demo() {
  const [cart, setCart] = useState(initialCart);
  const [discountRate, setDiscountRate] = useState(0.2);
  const [taxRate, setTaxRate] = useState(0.1);

  const addItem = () => {
    const newItem = { id: nextId++, name: 'dummy', price: 10, qty: 1 };
    setCart((items) => [...items, newItem]);
  };

  const deleteItem = (id: number) => {
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

      <p>Subtotal: {subTotal.toFixed(2)}</p>
      <p>Discount: {discount.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h2>Total: {total.toFixed(2)}</h2>
    </div>
  );
}
