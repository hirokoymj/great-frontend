# React.Lazy

- https://react.dev/reference/react/lazy
- In React, lazy allows you to defer loading a component's code until it is rendered for the first time.
- Code-splitting: to reduce the initial bundle size of your application.
- `lazy` returns a React component.
- Use `<Suspense>` to display a loading indicator while it’s loading.
- To use lazy loading, you must wrap the lazy-loaded component in a <Suspense> component, which provides a fallback UI while the code is loading.

**Example**

```js
import { Suspense, lazy } from 'react';
const LazyProfile = lazy(() => import('./LazyProfile'));
import BaseProfile from "./BaseProfile"

function LazyApp() {
  return (
    <div>
      <h1>My Application</h1>
	  <BaseProfile />
      <Suspense fallback={<div>Loading profile...</div>}>
        <LazyProfile />
      </Suspense>
    </div>
  );
```

return (
<BaseProfile />
<Suspense fallback={<div>Loading profile...</div>}>
<LazyProfile />
</Suspense>
)

**Summary (draft)**

One-liner sentence

React lazy defers loading a component until it is rendered, using <Suspense> to show a fallback UI while the code is loading.

| Item         | Meaning (Very Simple)                           |
| ------------ | ----------------------------------------------- |
| `lazy()`     | Loads a component **only when it’s needed**     |
| Purpose      | Reduce **initial bundle size** (code-splitting) |
| Return value | A **React component**                           |
| `<Suspense>` | Wrapper required for lazy components            |
| `fallback`   | UI shown **while the component is loading**     |

Interview-ready one-liner

React.lazy enables code-splitting by deferring a component’s loading until it is rendered, and must be used with <Suspense> to show a fallback UI during loading.

🧠 Flashcards (Quick Review)

Q1. What is React.lazy used for?
A. To load a component only when it is rendered (code-splitting).

Q2. What problem does lazy solve?
A. It reduces the initial bundle size.

Q3. What does lazy() return?
A. A React component.

Q4. Why is <Suspense> required?
A. To display a fallback UI while the lazy component loads.

Q5. Can you use lazy without <Suspense>?
A. ❌ No — it will throw an error.
