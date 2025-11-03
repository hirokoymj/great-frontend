# Preserving and Resetting State

**Summary (FINAL)**

```js
//====Ex1: a different component
<div>
  {counter}
  {counter}
</div>
//===Ex2: same component
<div>
  {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
</div>
//Ex4 - reset a form with a key
<Chat contact={to} />
<Chat key={to.id} contact={to} />
```

## Ex.1

- [State is tied to a position in the render tree ](https://react.dev/learn/preserving-and-resetting-state#state-is-tied-to-a-position-in-the-tree)
- [Fork](https://codesandbox.io/p/sandbox/dxkt9h?file=%2Fsrc%2FApp.js)
- div --> Counter (0)
- div --> Counter (0)
- These are two separate counters because each is rendered at its own position in the tree.

```js
export default function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}
```

## Ex.2

- [Same component at the same position preserves state](https://react.dev/learn/preserving-and-resetting-state#same-component-at-the-same-position-preserves-state)
- [Fork](https://codesandbox.io/p/sandbox/wx5rht?file=%2Fsrc%2FApp.js)
- It’s the same component at the same position, so from React’s perspective, it’s the same counter.

```js
const [isFancy, setIsFancy] = useState(false);
return (
  <div>
    {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
  </div>
);
```

## Ex 4 - Resetting a form with a key

- [Resetting a form with a key](https://react.dev/learn/preserving-and-resetting-state#resetting-a-form-with-a-key)
- [Fork](https://codesandbox.io/p/sandbox/vg7zz5?file=%2Fsrc%2FApp.js)
- [Fork - Answer](https://codesandbox.io/p/sandbox/g2zzyc?file=%2Fsrc%2FApp.js)
- Note : Remember that keys are not globally unique. They only specify the position within the parent.

```js
<Chat contact={to} />
<Chat key={to.id} contact={to} />
```

## Recap

- React keeps state for as long as the same component is rendered at the same position.
- State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
- You can force a subtree to reset its state by giving it a different key.

## Challenge

**Challenge 1**

- [Challenge 1 of 5: Fix disappearing input text](https://react.dev/learn/preserving-and-resetting-state#challenges)
- [Fork](https://codesandbox.io/p/sandbox/8zzz43?file=%2Fsrc%2FApp.js)
- 9/29

<hr />

**Challenge 2**

- [Challenge 2 of 5: Swap two form fields](https://react.dev/learn/preserving-and-resetting-state#swap-two-form-fields)
- [Fork](https://codesandbox.io/p/sandbox/j9tfxk?file=%2Fsrc%2FApp.js)

<hr />
