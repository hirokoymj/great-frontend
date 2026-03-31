# State: A Component's Memory

https://react.dev/learn/state-a-components-memory

## Challenge

**Challenge 1**

- [Challenge 1 of 4: Complete the gallery ](https://codesandbox.io/p/sandbox/react-dev-forked-9vn9d6?file=%2Fsrc%2FApp.js%3A27%2C34)
- [Fork](https://codesandbox.io/p/sandbox/q2ny7y)

**Next button**

```js
function handleNextClick() {
  setIndex((prev) => (prev < sculptureList.length - 1 ? prev + 1 : prev));
}

function handlePrevClick() {
  setIndex((prev) => (prev > 0 ? prev - 1 : prev));
}
```

- 10/2 ok

<hr />

**Challenge 2**

- [Challenge 2 of 4: Fix stuck form inputs](https://codesandbox.io/p/sandbox/react-dev-forked-53mpfz?file=%2Fsrc%2FApp.js%3A16%2C17)
- 10/2 ok

**Challenge 3**

[Challenge 3 of 4: Fix a crash](https://react.dev/learn/state-a-components-memory#fix-a-crash)

- 10/2 ok
<hr />
