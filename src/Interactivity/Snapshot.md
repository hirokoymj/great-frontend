# State as a Snapshot

### When React re-renders a component:

React calls your function again.
Your function returns a new JSX snapshot.
React then updates the screen to match the snapshot your function returned.

## Recap

- you saw that setting state requests a re-render from React.
- Setting state requests a new render.
- When you call useState, React gives you a snapshot of the state for that render.

## Challenge

**Challenge 1**

[Challenge 1 of 1: Implement a traffic light](https://react.dev/learn/state-as-a-snapshot#implement-a-traffic-light)
https://codesandbox.io/p/sandbox/g3zhn8

- [Fork](https://codesandbox.io/p/sandbox/sy9zw5)

```js
function handleClick() {
  walk ? alert('Walk') : alert('Stop');
  setWalk(!walk);
}
```
