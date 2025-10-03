# Render and Commit

**Summary(Final)**

```js
1. Initial render: createRoot
   const root = createRoot(document.getElementById('root'))
2. Trigger a render: The component state has been updated.
```

https://react.dev/learn/render-and-commit

## Initial render

When your app starts, you need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it’s done by calling `createRoot` with the target DOM node, and then calling its render method with your component:

```js
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Image />);
```

## Step 1: Trigger a render

1. It’s the component’s initial render.
2. The component’s (or one of its ancestors’) state has been updated.

## Re-renders when state updates

Once the component has been initially rendered, you can trigger further renders by updating its state with the set function.

## Recap

Any screen update in a React app happens in three steps:

- Trigger
- Render
- Commit

## Summary(draft)

```js
1. Initial render - createRoot
const root = createRoot(document.getElementById('root'));
2. Trigger a render - The component state has been updated.
```
