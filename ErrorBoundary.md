# Error Boundary

- [Error Boundary](#error-boundary)
  - [Summary](#summary)
  - [Error Boundary class](#error-boundary-class)
  - [Usage](#usage)
  - [ErrorBoundary + Async](#errorboundary--async)
- [lazy + Suspense](#lazy--suspense)
  - [Ultra-short summary](#ultra-short-summary)
  - [Sample Code](#sample-code)
  - [References](#references)

## Summary

- ErrorBoundary works like `try/catch` for React components.
- Catches render errors and shows a fallback UI.
- Does NOT catch async errors (fetch, setTimeout, etc.).
- Must be a class component (getDerivedStateFromError + componentDidCatch).
- **Returns**: state object including an error message.

## Error Boundary class

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }; //return state object
  }

  componentDidCatch(error, info) {}
```

## Usage

```js
<ErrorBoundary fallback={<h2>Something went wrong.</h2>}>
  <Profile />
</ErrorBoundary>
```

## ErrorBoundary + Async

- ErrorBoundary only catches render errors, not async errors.
- fetch() errors happen in useEffect after render.
- Solution: save error in state, then throw during render.

```js
useEffect(() => {
  try {
    fetch(...)
  } catch (err) {
    // ❌ This does NOT reach ErrorBoundary — it's inside useEffect, not render
  }
}, []);

if (error) {
  throw error; // ErrorBoundary catches here
}
```

# lazy + Suspense

- lazy() returns a React component.
- Use <Suspense> to show a fallback UI while the component is loading.
- lazy() splits the bundle — code loads only when the route is visited.
- React.lazy + Suspense splits the bundle per route — each page loads only when the user navigates to it.

```js
import { lazy, Suspense } from 'react';
const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage'));
<ErrorBoundary>
  <BrowserRouter>
    <Route
      element={
        <Suspense fallback={<Loading />}>
          <ProfilePage />
        </Suspense>
      }
    />
  </BrowserRouter>
</ErrorBoundary>;
```

## Ultra-short summary

- ErrorBoundary => catches render errors and shows fallback UI.
- lazy() => defers component loading
- Suspense => shows fallback UI while loading
- lazy + Suspense ==> route-based code splitting

```
<ErrorBoundary fallback=xxx>
 <Route
  ele=<Suspense fallback=xxx>
```

## Sample Code

- [App.jsx](./src/App.jsx)
- [ErrorBoundary.jsx](./src/pages/profile/ErrorBoundary.jsx)
- [ProfileFetch.jsx](./src/pages/profile/ProfileFetch.jsx)
- [ProfilePage.jsx](./src/pages/profile/ProfilePage.jsx)

## References

- [Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [static getDerivedStateFromError(error)](https://react.dev/reference/react/Component#static-getderivedstatefromerror)
