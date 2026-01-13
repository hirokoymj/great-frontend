Q1. What does useRef return, and what is the shape of its value?

A: `useRef` returns a mutable object with a single property { current }. `current` can hold any value (DOM element, number, object, function, etc.).

<hr />

Q2. Why does updating ref.current not trigger a re-render?

Updating `ref.current` does not trigger a re-render because React does **not track ref changes** for rendering. Refs persist across renders.

<hr />

Q3. When should you prefer useRef over useState?
(List two use cases.)

- Usecase 1 - Focus or access a DOM element
- Usecase 2 - Store mutable values like timer IDs, previous values, that must persist across renders without causing re-renders.

<hr />

Q4. True or False (explain briefly):
False - updating ref.current does not cause a re-render because React doesn't track ref changes.

<hr />

Q5. What will be logged to the console after clicking the button three times?
1, 2, 3

```js
<button
  onClick={() =>
    setCount((prev) => {
      prevCount.current = prev;
      return prev + 1;
    })
  }>
```
