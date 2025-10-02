# Responding to events

**Summary (final)**

```js
// Correct - only call when user clicks the button.
<button onClick={handleClick} /> //only call when user clicks the button.
// Incorrect - the function fires when the component renders, not when clicked!
<button onClick={handleClick()} />
// Inline as an anonymous function.
<button onClick={() => alert('You clicked me!')}>
```

## Recap

- You can handle events by passing a function as a prop to an element like <button>.
- Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
- You can define an event handler function separately or inline.
- Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.

## Challenge

**Challenge 1**

- [Challenge 1 of 2: Fix an event handler](https://react.dev/learn/responding-to-events#fix-an-event-handler)
- [Fork](https://codesandbox.io/p/sandbox/react-dev-forked-6wx79c?file=%2Fsrc%2FApp.js)
- [Fork-answer](https://codesandbox.io/p/sandbox/x7j4vj?file=%2Fsrc%2FApp.js)
- The problem is that <button onClick={handleClick()}> calls the handleClick function while rendering instead of passing it. Removing the () call so that it’s <button onClick={handleClick}> fixes the issue:
- 10/1 (ok)
<hr />

**Challenge 2**

- [Challenge 2 of 2: Wire up the events ](https://react.dev/learn/responding-to-events#wire-up-the-events)
- [Fork](https://codesandbox.io/p/sandbox/react-dev-forked-x8cy85?file=%2Fsrc%2FApp.js%3A11%2C12-11%2C31)
- 10/1 (ok)
