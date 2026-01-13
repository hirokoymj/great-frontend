## useState

**Summary (final)**

- When state updates, a re-rendering happens.
- **Functional update** | **Direct update**
- `prev => ...` vs `setActive(false)`
- React does not update state immediately.
- React may batch multiple state updates together.
- **Functional update**: use when the next state depends on previous state (e.g., toggling a boolean).
- **Direct update**: use when setting a fixed value that does not depend on previous state.

<hr />

### My notes

**Two Ways to Update State**

- Functional update
- Direct state reference
  Both work — but they are NOT equivalent in all cases.

**Why this happens:**

- React does not update state immediately
- React may batch multiple state updates together
- Your function may run before React applies previous updates

**✅ Example**

```js
const [isActive, setIsActive] = useState(false);
function handleClick() {
  setIsActive(!isActive); //React does not update state immediately.
  setIsActive(!isActive); // Also React may batch multiple state updates together
}
// Result: false -> true, Not (false->true->false)

function handleClick() {
  setIsActive((prev) => !prev); //false -> true
  setIsActive((prev) => !prev); //true -> false
}
```

**✅ Why React Batches Updates**

- Improve performance
- Reduce unnecessary re-renders

This batching can happen:

**✅ Use functional updates when:**

- Next state depends on previous state
- Toggling booleans
- Incrementing counters
- Multiple updates in a row
- Updates inside async logic

**✅ When Is setIsActive(!isActive) OK?**

- A fixed value
- State does NOT depend on previous value

```js
const handleReset = () => {
  setIsActive(false);
  setIsHighlighted(false);
};
```

- stopPropagation is used to prevent a child event from propagating to a parent component and triggering its handler.
