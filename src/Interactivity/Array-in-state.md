# Updating Arrays in State

**prefer (returns a new array)**

- adding: [...arr]
- removing: filter, slice
- replacing: map
- sorting: copy the array first and then reverse/sort

## Pitfall

- slice lets you copy an array or a part of it.
- splice **mutates** the array (to insert or delete items).

## Ex1.Adding to an array

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

## Ex2. Remove from an array

- https://react.dev/learn/updating-arrays-in-state#removing-from-an-array
- [Fork](https://codesandbox.io/p/sandbox/gyy8t8)

```js
setArtists(artists.filter((a) => a.id !== artist.id));
```

## Transforming an array

- https://react.dev/learn/updating-arrays-in-state#transforming-an-array

```js
const nextShapes = shapes.map((shape) => {
  if (shape.type === 'square') {
    return shape;
  } else {
    return {
      ...shape,
      y: shape.y + 50,
    };
  }
});
```

## Ex3. Inserting into an array at a paticular position

- `... array` spread syntax together with the `slice()` method

```js
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
```

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0, 1)); //[ant]
console.log(animals.slice(1)); //["bison", "camel", "duck", "elephant"]
```

## Ex4. Reverse

- https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array

1. copy the original array using [...]
2. array.reverse()

```js
const nextList = [...list];
nextList.reverse();
setList(nextList);
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

<hr />

**Challenge 3**

- [Challenge 3 of 4: Fix the mutations using non-mutative methods](https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-non-mutative-methods)
<hr />
