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

#### Coding:

- [Like Button](./src/pages/LikeButton/LikeBtn.jsx)

## ---------- Final summary ----------

## Forms

https://www.greatfrontend.com/react-interview-playbook/react-forms

## ---------- Final summary ----------
