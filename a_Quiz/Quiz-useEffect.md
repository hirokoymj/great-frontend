# Quiz - useEffect + Async

- [Quiz - useEffect + Async](#quiz---useeffect--async)
	- [Summary](#summary)
	- [Q1: useEffect + Async + Filter + race condition - ❌(05/27)](#q1-useeffect--async--filter--race-condition---0527)
		- [Answer](#answer)
	- [Q2: new Set()](#q2-new-set)
		- [Answer](#answer-1)

✅❌

## Summary

```
useEffect(()=>{}) //Effects run after *every* render.
useEffect(() => {}, []) //Once (mount only)
useEffect(() => {}, [a]) //Mount + when "a" changes
useEffect(() => return ()=>{}) //Clean-up function (call every re-render)
```

## Q1: useEffect + Async + Filter + race condition - ❌(05/27)

1. Displays categories in a dropdown.
   https://fakestoreapi.com/products/categories
   `['electronics', 'jewelery', ...]`
2. When a category is selected:
   - Fetch products for that category.
     https://fakestoreapi.com/products/category/{category}

```js
//Starter Boilerplate (Provided)
import { useEffect, useState } from 'react';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Fetch categories on mount
    // https://fakestoreapi.com/products/categories
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    // TODO: Fetch products when category changes
    //	https://fakestoreapi.com/products/category/{category}
    //  https://fakestoreapi.com/products/category/jewelery
  }, [selectedCategory]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {/* ❌TODO: Render category options */}
      </select>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>{/* TODO: Render products */}</ul>
    </div>
  );
}
```

### Answer

```js
import { useEffect, useState } from 'react';
export default function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/categories';
    setLoading(true);
    setError(null);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('failed to get categories');
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    const url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok)
          throw new Error('Failed to get product by a category');
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        if (e.name !== 'AbortError') setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort(); // cleanup: cancel
  }, [selectedCategory]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {products.map(({ id, title, price }) => {
          return (
            <li key={id}>
              {id}, {title}, ${price.toFixed(2)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

## Q2: new Set()

1. Fetch Data - https://jsonplaceholder.typicode.com/posts
2. Dropdown (Form)
3. new Set() - flatten a duplicate user Ids

```js
import { useState } from 'react';
const mockPosts = [
  { id: 1, userId: 1, title: 'Post one' },
  { id: 2, userId: 1, title: 'Post two' },
  { id: 3, userId: 2, title: 'Post three' },
  { id: 4, userId: 2, title: 'Post four' },
  { id: 3, userId: 3, title: 'Post three' },
  { id: 4, userId: 3, title: 'Post four' },
];

export default function Demo() {
  const [userId, setUserId] = useState('all');
  const userList = [...new Set(mockPosts.map((data) => data.userId))];

  return (
    <select value={userId} onChange={(e) => setUserId(e.target.value)}>
      <option value="all">All Users</option>
      {userList.map((id) => (
        <option key={id}>{id}</option>
      ))}
    </select>
  );
}
```

### Answer

```js
export default function Demo() {
  const [userId, setUserId] = useState('all');
  const userList = [...new Set(mockPosts.map((data) => data.userId))];

  return (
    <select value={userId} onChange={(e) => setUserId(e.target.value)}>
      <option value="all">All Users</option>
      {userList.map((id) => (
        <option key={id}>{id}</option>
      ))}
    </select>
  );
}
```
