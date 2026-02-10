// Typing "ph" shows Phone and updates the total price.
// Typing "la" shows Laptop and updates the total price.

import { useState, useMemo } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 },
  { id: 4, name: 'Monitor', price: 400 },
];

export default function App() {
  const [search, setSearch] = useState('');

  // TODO: Filter products based on search text

  // TODO: Use useMemo to calculate total price of filtered products

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>{/* TODO: Render filtered products */}</ul>

      <h3>Total Price: ${/* TODO */}</h3>
    </div>
  );
}

///============Answer
// import { useState, useMemo } from 'react';

// const PRODUCTS = [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 3, name: 'Tablet', price: 600 },
//   { id: 4, name: 'Monitor', price: 400 },
// ];

// export default function App() {
//   const [search, setSearch] = useState('');

//   const filtered = PRODUCTS.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const total = useMemo(() => {
//     return filtered.reduce((acc, product) => acc + product.price, 0);
//   }, [filtered]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Product List</h2>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filtered.map(({ id, name, price }) => (
//           <li key={id}>
//             {name}, ${price}
//           </li>
//         ))}
//       </ul>

//       <h3>Total Price: ${total}</h3>
//     </div>
//   );
// }
