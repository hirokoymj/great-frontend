# Quiz - useEffect + Async

- [Quiz - useEffect + Async](#quiz---useeffect--async)
  - [Summary](#summary)
  - [Q1: useEffect + Async + Filter - ❌(05/27)](#q1-useeffect--async--filter---0527)
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

## Q1: useEffect + Async + Filter - ❌(05/27)

- All products:
  - https://fakestoreapi.com/products
- Category dropdown:
  - https://fakestoreapi.com/products/categories
  - `['electronics', 'jewelery', ...]`
- Filter by a category

```js
import { useEffect, useState } from 'react';
export default function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);

  const loading = categoriesLoading || productsLoading;

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/categories';
  }, []);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/`;
  }, []);

  //const computed =

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {TODO}
      </select>
      <ul>{TODO}</ul>
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
  const [error, setError] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);

  const loading = categoriesLoading || productsLoading;

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/categories';
    setCategoriesLoading(true);
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
        setCategoriesLoading(false);
      });
  }, []);

  useEffect(() => {
    setProductsLoading(true);
    setError(null);
    const url = `https://fakestoreapi.com/products/`;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to get products');
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setProductsLoading(false);
      });
  }, []);

  const computed =
    selectedCategory !== ''
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

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
      <ul>
        {computed.map(({ id, title, price }) => {
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
