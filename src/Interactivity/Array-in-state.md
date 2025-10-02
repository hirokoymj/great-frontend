# Updating Arrays in State

**Summary(draft)**

```js
// Add
setArtists([
	...artists,
	{id: nextId++, name}
]
// Remove
setArtists(artists.filter((a) => a.id !== artist.id));
// Change
setTodos(todos.map(t => {
if (t.id === nextTodo.id) {
	return nextTodo;
} else {
	return t;
}
}));
// Paticular index
const nextArtists = [
  ...artists.slice(0, 1),
  { id: nextId++, name: name },
  ...artists.slice(1),
];
// Reverse
const nextList = [...list];
nextList.reverse();
setList(nextList);
```

**prefer (returns a new array)**

- adding: `[...arr]`
- removing: `filter`
- replacing: `map`
- insert at a paticular position: `slice`
- reverse: `reverse`

**Reference:**
https://react.dev/learn/updating-arrays-in-state

## Pitfall

- slice == shallow copy.
- splice **mutates** the array (to insert or delete items).

```js
//=== Slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// ["camel", "duck", "elephant"]
```

```js
const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

## Ex1. Adding

- https://react.dev/learn/updating-arrays-in-state#adding-to-an-array
- [fork](https://codesandbox.io/p/sandbox/6v33nx)

```js
setArtists([
  ...artists,
  {
  id: nextId++,
  name: name,
}]
```

## Ex2. Removing

- https://react.dev/learn/updating-arrays-in-state#removing-from-an-array
- [Fork](https://codesandbox.io/p/sandbox/gyy8t8)

```js
setArtists(artists.filter((a) => a.id !== artist.id));
```

## Ex3. Replacing

- https://react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array

```js
const [counters, setCounters] = useState(initialCounters);
const nextCounters = counters.map((c, i) => {
  if (i === index) {
    return c + 1;
  } else {
    return c;
  }
});
setCounters(nextCounters);
```

## Ex4. Inserting at a paticular position

- https://react.dev/learn/updating-arrays-in-state#inserting-into-an-array
- `... array` spread syntax together with the `slice()` method

```js
//Ex.1
const artists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];
const nextArtists = [
  ...artists.slice(0, 1),
  { id: nextId++, name: name },
  ...artists.slice(1),
];
// Ex.2
const insertAt = 2; //Could be any index
const nextArtists = [
  ...artists.slice(0, insertAt),
  { id: nextId++, name: name },
  ...artists.slice(insertAt),
];
```

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0, 1)); //[ant]
console.log(animals.slice(1)); //["bison", "camel", "duck", "elephant"]
```

## Ex5. Reversing

- https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array

```js
const nextList = [...list];
nextList.reverse();
setList(nextList);
```

## Recap

- create a new version of it, and update the state to it.
- You can use the [...arr, newItem] array spread syntax to create arrays with new items.
- You can use filter() and map() to create new arrays with filtered or transformed items.

## Summary(draft)

```js
//add
setArtists([
  ...artists,
  {
  id: nextId++,
  name: name,
}]
// Remove
setArtists(artists.filter((a) => a.id !== artist.id));
// Change
  setTodos(todos.map(t => {
    if (t.id === nextTodo.id) {
      return nextTodo;
    } else {
      return t;
    }
  }));
// A paticular index
const index = 2;
const nextArtists = [
  ...artists.slice(0, index),
  { id: nextId++, name: name },
  ...artists.slice(index),
];
// Reverse
const nextList = [...list]; //Copy
nextList.reverse(); //Reverse
setList(nextList); //Setter
```

## Challenge

**Challenge 1**

- [Challenge 1 of 4: Update an item in the shopping cart](https://react.dev/learn/updating-arrays-in-state#update-an-item-in-the-shopping-cart)
- [Fork](https://codesandbox.io/p/sandbox/n28jq8?file=%2Fsrc%2FApp.js)

```js
const products = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
];
const updated = products.map((d) => {
  if (d.id === 2) {
    d.count++;
  }
  return d;
});
//Array [ { id: 0, name: "Baklava", count: 1 },  { id: 1, name: "Cheese", count: 5 },  { id: 2, name: "Spaghetti", count: 3 }]
```

- 10/2(ok)

<hr />

**Challenge 2**

- [Challenge 2 of 4: Remove an item from the shopping cart](https://react.dev/learn/updating-arrays-in-state#remove-an-item-from-the-shopping-cart)
- 10/2 (x)

```js
const handleDecreaseClick = (productId) => {
  const found = products.find((d) => d.id === productId);

  if (found.count === 1) {
    setProducts(products.filter((d) => d.id !== productId));
  } else {
    setProducts(
      products.map((d) => {
        if (d.id === productId) {
          d.count = d.count - 1;
        }
        return d;
      })
    );
  }
};
//Solution
function handleDecreaseClick(productId) {
  let nextProducts = products.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        count: product.count - 1,
      };
    } else {
      return product;
    }
  });
  nextProducts = nextProducts.filter((p) => p.count > 0);
  setProducts(nextProducts);
}
```

<hr />

**Challenge 3**

- [Challenge 3 of 4: Fix the mutations using non-mutative methods](https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-non-mutative-methods)

```js
function handleChangeTodo(nextTodo) {
  const todo = todos.find((t) => t.id === nextTodo.id);
  todo.title = nextTodo.title;
  todo.done = nextTodo.done;
  const updated = todos.map((d) => {
    if (d.id === todo.id) {
      return todo;
    } else {
      return d;
    }
  });
  setTodos(updated);
}
// Solution
function handleChangeTodo(nextTodo) {
  setTodos(
    todos.map((t) => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    })
  );
}
```

- 10/2 (X)

<hr />
