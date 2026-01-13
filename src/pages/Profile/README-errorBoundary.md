# Error Boundary

Summary (draft)

```text
An Error Boundary is a React component that renders a fallback UI when a child component throws an error, by using static getDerivedStateFromError.
```

- [Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- An Error Boundary is a special component that lets you display some fallback UI
- [static getDerivedStateFromError(error)](https://react.dev/reference/react/Component#static-getderivedstatefromerror)
- **Returns**: state object including an error message

- “For data fetching, I catch async errors, store them in state, and re-throw during render so Error Boundaries can handle them.”
  Error Boundary = try/catch for the React component tree

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }; //return state object
  }
  //...
  render() {
    return this.state.hasError ? (
      <div>
        {this.props.fallback}
        <p>{this.state.error.message}</p>
      </div>
    ) : (
      this.props.children
    );
  }
}
```

**Usage**

```js
<ErrorBoundary fallback={<h2>Something went wrong.</h2>}>
  <Profile user={user} />
</ErrorBoundary>
```
