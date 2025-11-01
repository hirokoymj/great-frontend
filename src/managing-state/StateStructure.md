# Choosing the State Structure

```js
//===========1. Don't mirror props in state.
// The state is only initialized during the first render.
// When props changes from Parents, UI doesn't be updated.
// Props==read-only
function Message({ messageColor }) { //Wrong!!
  const [color, setColor] = useState(messageColor);

// CORRECT- Use the prop directly.
function Message({ messageColor }) {
  const color = messageColor;

//===== 2. Save only an "id" instead of an object.
const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];
const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(0) //Save id only
const selectedItem = items.find((item) => item.id === selectedId);
<p>You picked {selectedItem.title}.</p>

//============3. Form: checkbox
const [tac, setTac] = useState(false);
<input type="checkbox" checked={tac} onChange={(e) => setTac(e.target.checked)} />

//============4. Form: checkbox(multi)
const [selectedOptions, setSelectedOptions] = useState([]);
<input
	type="checkbox"
	name="subject"
	value="math"
	checked={selectedOptions.includes('math')}
	onChange={(e) => {
	const { value, checked } = e.target;
	checked
		? setSelectedOptions((prev) => [...prev, value])
		: setSelectedOptions((prev) =>
			prev.filter((option) => option !== value)
		);
	}}
/>
```

**Form**

- Text `<input>`, value, `setState(e.target.value)`
- Checkbox `<input>`, checked, `setState(e.target.checked), useState(false)`
- Checkbox (multi) `<input>`, value=v, checked, `selectedOptions.includes(v), useState([]), value=xxx`
- Radio `<input>`, value=v, checked, `setState(e.target.value)`
- Textarea `<textarea>`, value, `setState(e.target.value)`
- Dropdown `<select>`, value, `setState(e.target.value)`

**Props vs State**

| Feature    | Props           | State                      |
| ---------- | --------------- | -------------------------- |
| Mutability | read-only       | Mutable                    |
| Data Flow  | Parent to child | Internal to the component. |

**References:**

- https://react.dev/learn/choosing-the-state-structure
- https://www.greatfrontend.com/react-interview-playbook/react-forms#summary

## ex1. Group related state.

```js
// Before
const [x, setX] = useState(0);
const [y, setY] = useState(0);
// After (Grouping)
const [position, setPosition] = useState({ x: 0, y: 0 });
```

## ex2. Avoid contradictions in state.

- Form, status, 'typing' (initial), 'sending', and 'sent':

## ex3. Avoid duplication in state.

- the contents of the selectedItem is the same object as one of the items inside the items list.

```js
const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];
//===========BEFORE
export default function Menu() {
const [items, setItems] = useState(initialItems);
const [selectedItem, setSelectedItem] = useState(items[0]); //!!!PROBLEM
//============AFTER
const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(0)
```

**Before**

- `items = [{ id: 0, title: 'pretzels'}, ...]`
- `selectedItem = {id: 0, title: 'pretzels'}`

**After**

- `items = [{ id: 0, title: 'pretzels'}, ...]`
- `selectedId = 0`

```js
export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{' '}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}>
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}
```

## Ex.2 - Don’t mirror props in state

Here, a color state variable is initialized to the messageColor prop. The problem is that if the parent component passes a different value of messageColor later (for example, 'red' instead of 'blue'), the color state variable would not be updated! **The state is only initialized during the first render.**

```js
//==WRONG
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
//=== CORRECT
function Message({ messageColor }) {
  const color = messageColor; // use messageColor directly!!
```

## Challenge/Quiz

**Challenge 1 (don't mirror props in state)**

- [Challenge 1 of 4: Fix a component that’s not updating](https://react.dev/learn/choosing-the-state-structure#fix-a-component-thats-not-updating)
- [Fork](https://codesandbox.io/p/sandbox/7fcq3m?file=%2Fsrc%2FApp.js)
- (Solution) when the color prop changes, this does not affect the state variable! So they get out of sync. Use the color prop **directly**.
- 9/29

<hr />

**Challenge 2 (redundant state)**

- [Challenge 2 of 4: Fix a broken packing list ](https://react.dev/learn/choosing-the-state-structure#fix-a-broken-packing-list)
- [Fork](https://codesandbox.io/p/sandbox/2ntwmg)
- 9/29
- (Hint/Wrong point/Solution)

  ```js
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
                  onChange={(e) =>
                    handleTogglePacked(item.id, e.target.checked)
                  }
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
  ```

<hr />

**Challenge 4 (multiple selection)**

- [Challenge 4 of 4: Implement multiple selection](https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection)
- [Fork](https://codesandbox.io/p/sandbox/4vw35r)
- [Fork answer](https://codesandbox.io/p/sandbox/react-dev-forked-htg8mp?file=%2Fsrc%2FApp.js%3A7%2C1)
- (Wrong point) if checked or not ==> array.include(v)
- (Wrong point) checked={selectedOptions.includes('english')}
- http://localhost:5173/checkbox-demo
- 9/29, 9/30 (x), 10/26

```js
//====9/30 TypeError selectedIds.includes is not a
  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedIds(toggledId);
    if (selectedIds.includes(toggledId)) {
      //true ==> false
      const filtered = selectedIds.filter((d) => d !== toggledId);
    } else {}
    <Letter
      key={letter.id}
      letter={letter}
      isSelected={
        selectedIds.includes(letter.id)
      }
//====Answer
  function handleToggle(toggledId) {
    // Was it previously selected?
    if (selectedIds.includes(toggledId)) {
      // Then remove this ID from the array.
      setSelectedIds(selectedIds.filter(id =>
        id !== toggledId
      ));
    } else {}
```

<hr />

**Question 1 (Avoid duplicate in state)**

- [Fork](https://codesandbox.io/p/sandbox/7xsnvf?file=%2Fsrc%2FApp.js)
- (Hint) Stores the selected item as an id instead of an object.
  the contents of the selectedItem is the same object as one of the items inside the items list.
- 9/29

<hr />

**Question 2 (multiple checkbox)**

- [Q4](./State-Structure/Q4-checkbox-multi.jsx)
- [Q4 answer](./State-Structure/Q4-checkbox-multi.jsx)
- https://www.greatfrontend.com/react-interview-playbook/react-forms#checkbox-input

<hr />
