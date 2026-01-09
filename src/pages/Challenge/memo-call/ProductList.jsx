import { useState, useMemo } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 },
  { id: 4, name: 'Monitor', price: 400 },
];

export default function ProductList() {
  const [search, setSearch] = useState('');

  // TODO: Filter products based on search text⚠️
  const filtered = PRODUCTS.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  // TODO: Use useMemo to calculate total price of filtered products⚠️
  //   const total = useMemo(() => {
  //     return (
  //       filtered.reduce((acc, currentVal) => {
  //         acc = currentVal.price + acc;
  //         return acc;
  //       }, 0),
  //       [search]
  //     );
  //   });

  //useMemo prevents recalculating the total price on every render and
  // only recomputes it when the filtered product list changes,
  // which is useful if the calculation is expensive or the list is large.”
  const total = useMemo(() => {
    return filtered.reduce((acc, product) => acc + product.price, 0);
  }, [filtered]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {
          /* TODO: Render filtered products */
          filtered.map(({ id, name, price }) => (
            <li key={id}>
              {name}, ${price}
            </li>
          ))
        }
      </ul>

      <h3>Total Price: ${total}</h3>
    </div>
  );
}
