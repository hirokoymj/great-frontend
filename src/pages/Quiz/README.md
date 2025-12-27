# React.js Quiz

**Summary(final)**

```js
const { rank, ...rest } = prev;
return rest;
if ('rank' in prev) return prev;
return { ...prev, rank: 'Beginner' };
```

## My note

### PlayerProfile (12/26/2025)

- [in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [...rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- Add/Remove a property for a state object

```js
const [player, setPlayer] = useState({
  name: 'Alex',
  level: 3,
  points: 150,
});

//Add a rank==> if in obj, make in car
setPlayer((prev) => {
  if ('rank' in prev) return prev;

  return {
    ...prev,
    rank: 'Beginner',
  };
});
//Remove a rank
setPlayer((prev) => {
  const { rank, ...rest } = prev;
  return rest;
});
```

**Rest**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one); // Output: 1
console.log(two); // Output: 2
console.log(rest); // Output: [3, 4, 5, 6]
```

**Summary(draft)**

```js
- const { rank, ...rest } = prev;
- return rest;
- if ('rank' in prev) return prev;
- return {  ...prev,  rank: 'Beginner',};
```

<hr />
