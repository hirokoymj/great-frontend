# Great Frontend

## React hooks

- https://www.greatfrontend.com/react-interview-playbook/react-hooks

## ---------- Final summary ----------

## Basic Concept

https://www.greatfrontend.com/react-interview-playbook/react-basic-concepts

## ---------- Final summary ----------

## Data fetching

https://www.greatfrontend.com/react-interview-playbook/react-data-fetching

#### Basic data fetching:

- Using `useEffect` and `useState` for fetching data in functional components
- Handling `loading` and `error` states
- Understanding dependency arrays ([] for on-mount fetch, [query] for fetch-on-change)
- Avoiding infinite loops due to missing dependencies.
- Cleaning up side effects (e.g., aborting fetch requests to prevent setting state on unmount)

#### Key interview question

Q1: How do you fetch data in React?

- Using `useEffect` and `useState` for fetching data.

<hr />

Q2: What are the benefits of using TanStack Query over `useState` and `useEffect`?

- Handle data fetching, caching,synchronization, and state management in front end applications. Caching, Error Handing, Optimistic updates, Pagination.

<hr />

Q3: How do you prevent redundant API requests in a live search?

- Implement caching. For GraphQL, the default fetch-policy is `cache-first`. `fetchPolicy: 'cache-first' | 'network-only'`

<hr />

Q4: What are optimistic updates, and how do they improve performance?

- Optimistic updates are a technique used in data mutations where the UI updates before receiving a response from the server.
- Optimistic updates reduce perceived latency and improves user experience.

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

<hr />

Q5: How do you handle errors and retries in API calls?

- Create a state variables to handling loading and error.

<hr />

Q6: How do you cancel an API request if a component unmounts?

- Using a cleanup function in useEffect to set an isMounted flag to false.

```js
useEffect(() => {
  let isMounted = true;

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
      if (isMounted) {
        setData(data);
      }
    });

  return () => {
    isMounted = false;
  };
}, []);
```

#### Practice questions

Q: How do you handle asynchronous data loading in React applications?

- Using `useState` and `useEffect` hooks

Q: Explain server-side rendering of React applications and its benefits?

- Real dom instead of virtual dom so SEO friendly.

Q: What are some common pitfalls when doing data fetching in React?

- Not handling loading and error states
- Causing memory leaks by not cleaning up subscriptions
- Not using the right lifecycle methods or hooks
- Ignoring dependency arrays in useEffect
- Fetching data in the render method

```js
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
return <div>{JSON.stringify(data)}</div>;
```

#### Coding:

- [Like Button](./src/pages/LikeButton/LikeBtn.jsx)

## ---------- Final summary ----------

- Using `useEffect` and `useState` for fetching data.
- Handling `loading` and `error` states.
- Add dependency arrays ([] for on-mount fetch, [query] for fetch-on-change)

```js
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);
// POST
useEffect(() => {
  fetch('https://questions.greatfrontend.com/api/questions/like-button', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  })
...
}, []);
```

## ---------- Final summary ----------

## Forms

https://www.greatfrontend.com/react-interview-playbook/react-forms

## ---------- Final summary ----------
