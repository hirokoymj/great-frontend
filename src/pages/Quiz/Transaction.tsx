import { useState } from 'react';

//  { id: 1, name: 'iPhone 15', date: '2024-01-15', price: 999 },

interface Product {
  id: number;
  name: string;
  date: string;
  price: number;
}

interface TransactionProps {
  products: Product[];
}

export default function Transaction({ products }: TransactionProps) {
  const [selectedDate, setSelectedDate] = useState<string>(''); //UI
  const [filterDate, setFilterDate] = useState<string>('');
  const [sortBy, setSortBy] = useState<boolean>(false); //UI

  //✅ POINT Filtered is computed from
  let filtered: Product[] = filterDate
    ? products.filter(
        (product) => new Date(product.date) < new Date(filterDate),
      )
    : products;
  filtered = sortBy
    ? [...filtered].sort((a, b) => a.price - b.price)
    : [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="app">
      <h1>Product Search</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={() => setFilterDate(selectedDate)}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th onClick={() => setSortBy((prev) => !prev)}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(({ id, name, date, price }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{date}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
