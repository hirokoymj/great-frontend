# Fetch GET request

- https://jsonplaceholder.typicode.com/posts
- https://www.greatfrontend.com/react-interview-playbook/react-data-fetching#server-side-data-fetching-and-server-side-rendering-ssr
- Optimistic updates are a technique used in data mutations where the UI updates before receiving a response from the server.

```js
const handleLike = async () => {
  setLike((count) => count + 1); // Update UI optimistically

  try {
    await fetch('/api/posts/4/like', {
      method: 'POST',
    });
  } catch (error) {
    setLike((count) => count - 1); // Rollback on failure
  }
};
```
