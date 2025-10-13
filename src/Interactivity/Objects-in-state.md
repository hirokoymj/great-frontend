# Updating Objects in State

```js
//=== Update object
{...obj, firstName: 'xxx'}

//===Using a single event handler for multiple fields: []
const [person, setPerson] = useState({
  firstName: 'Barbara',
  lastName: 'Hepworth',
});

function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
// Add/Update/Delete
const person = {  name: 'Bob', age: 25, country: 'Canada'};
person.city = 'Los Angeles';
const result1 = { ...person, age: 30 };
delete person.age;

Object.values(person); //[ 'Bob', 25, 'Canada' ]
Object.keys(person); //[ 'name', 'age', 'country' ]
Object.entries(person); //[ [ 'name', 'Bob' ], [ 'age', 25 ], [ 'country', 'Canada' ] ]
```

**Reference:**

https://react.dev/learn/updating-objects-in-state

```js
const [person, setPerson] = useState({
  firstName: 'Barbara',
  lastName: 'Hepworth',
  email: 'bhepworth@sculpture.com',
});

function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
```

- To trigger a re-render, create a new object and pass it to the state setting function:
- You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.

## Using a single event handler for multiple fields

- [Using a single event handler for multiple fields](https://react.dev/learn/updating-objects-in-state#using-a-single-event-handler-for-multiple-fields)
- [Fork](https://codesandbox.io/p/sandbox/fp9gpf?file=%2Fsrc%2FApp.js)
- Use the [] braces for a dynamic property name.

```js
const [person, setPerson] = useState({
  firstName: 'Barbara',
  lastName: 'Hepworth',
  email: 'bhepworth@sculpture.com',
});

function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
```

## Updating a nested object

```js
setPerson({
  ...person, // Copy other fields
  artwork: {
    // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi', // but in New Delhi!
  },
});
```

## Recap

- You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.

## Summary (draft)

```js
//=== Update object
{...obj, something: 'newValue'}

//===Using a single event handler for multiple fields: []
const [person, setPerson] = useState({
  firstName: 'Barbara',
  lastName: 'Hepworth',
});

function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
```

## Challenge

**Challenge 1**

- Challenge 1 of 3: Fix incorrect state updates
- 10/2 - ok

<hr />

**Challenge 2**

[Challenge 2 of 3: Find and fix the mutation](https://react.dev/learn/updating-objects-in-state#find-and-fix-the-mutation)

- [Fork](https://codesandbox.io/p/sandbox/9zzxdh?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/4ssn6g?file=%2Fsrc%2FApp.js)
- 10/2 (ok)

<hr />

## 10/13

```js
const person = {
  name: 'Bob',
  age: 25,
  country: 'Canada',
};
//Add
person.city = 'los Angeles';

//Update
const result1 = { ...person, age: 30 };

//Delete a property
delete person.age;

Object.values(person); //[ 'Bob', 25, 'Canada' ]
Object.keys(person); //[ 'name', 'age', 'country' ]
Object.entries(person); //[ [ 'name', 'Bob' ], [ 'age', 25 ], [ 'country', 'Canada' ] ]
```
