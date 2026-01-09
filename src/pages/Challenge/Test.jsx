import { useState, memo } from 'react';

// const Child = memo(({ onFilter }) => {
//   console.log('Child rendered');
//   return <button onClick={onFilter}>Filter</button>;
// });

const Child = ({ onFilter }) => {
  console.log('Child rendered');
  return <button onClick={onFilter}>Filter</button>;
};

export default function Parent({ items }) {
  const [query, setQuery] = useState('');

  //   const filterItems = () => {
  //     return items.filter((item) =>
  //       item.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //   };

  const filterItems = () => {
    useMemo(() => {
      return items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }, [items, query]);
  };

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Child onFilter={filterItems} />
    </>
  );
}
