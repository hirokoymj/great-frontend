import { useMemo, useState } from 'react';
import './styles2.css';

const initialCart = [
  { id: 1, name: 'Laptop', price: 1200, qty: 1 },
  { id: 2, name: 'Mouse', price: 25, qty: 2 },
  { id: 3, name: 'Keyboard', price: 75, qty: 1 },
];

export default function App() {
  const [cart, setCart] = useState(initialCart);
  const [discountCode, setDiscountCode] = useState('');
  const [taxRate, setTaxRate] = useState(0.1); // 10%

  const output = useMemo(() => {
    //let items = [...initialCart];
    let items = [...cart];

    // TODO 1:
    const subtotal = items.reduce((acc, currentVal) => {
      //acc = acc + currentVal.price;
      acc = acc + currentVal.price * currentVal.qty;
      return acc;
    }, 0);

    // TODO 2:
    let discountRate = 0;
    if (discountCode === 'SAVE10') {
      discountRate = 0.1;
    } else if (discountCode === 'SAVE20') {
      discountRate = 0.2;
    }
    const discount = subtotal * discountRate;

    // TODO 3:
    //const tax = subtotal * discount * taxRate;
    const tax = (subtotal - discount) * taxRate;

    // TODO 4:
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

      {/* TODO: Display all calculated values */}
      <p>Subtotal: {output.subtotal}</p>
      <p>Discount: {output.discount}</p>
      <p>Tax: {output.tax}</p>
      <h2>Total: {output.total}</h2>
    </div>
  );
}
