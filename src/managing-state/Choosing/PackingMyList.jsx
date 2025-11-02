import { useState } from 'react';

const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];
const nextId = 3;
export default function PackingMyList() {
  const [items, setItems] = useState(initialItems);
  const [text, setText] = useState('');

  const onDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    if (text.trim() === '') return;
    const newItem = {
      id: nextId,
      title: text,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
    setText('');
  };

  const handleTogglePacked = (id, checked) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, packed: checked } : item
    );
    setItems(updated);
  };

  return (
    <div>
      <h1>Packing List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={(e) => handleTogglePacked(item.id, e.target.checked)}
              />{' '}
              {item.title}
            </label>
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// MY WRONG CODE - I did wrong ADD, DELET, AND UPDATE ITEM!!!
// <div>
//   <h1>Packing List</h1>
//   <input
//     type="text"
//     value={newItem}
//     onChange={(e) => setNewItem(e.target.value)}
//   />
//   <button onClick={handleAddItem}>Add</button>
//   <ul>
//     {items.map((item) => (
//       <li key={item.id}>
//         <label>
//           <input
//             type="checkbox"
//             checked={item.packed}
//             onChange={(e) => {
//               const updated = items.map((data) => {
//                 if (data.id === item.id) {
//                   return {
//                     ...item,
//                     packed: e.target.checked,
//                   };
//                 } else {
//                   data;
//                 }
//               });
//               setItems(updated);
//             }}
//           />{' '}
//           {item.title}
//         </label>
//         <button onClick={() => onDeleteItem(item.id)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// </div>
