# Quiz - Restful API

- [Quiz - Restful API](#quiz---restful-api)
  - [Q1: Products API - mm/dd](#q1-products-api---mmdd)
    - [Answer](#answer)
    - [Improvement (draft)](#improvement-draft)
  - [Q2: Posts API - mm/dd](#q2-posts-api---mmdd)
    - [Answer](#answer-1)
    - [Improvement (draft)](#improvement-draft-1)

<!-- create index  cmd+Shift+P -->

✅❌

## Q1: Products API - mm/dd

**📋 Requirements**

1. Fetch product categories on initial load.
2. Display categories in a dropdown.
3. When a category is selected:
   - Fetch products for that category.
   - Display:
     - Product title
     - Price
4. Show a loading state while fetching data.
5. Handle API errors gracefully.

⭐ Bonus (If Time Allows)

- Disable dropdown while loading
- Format price as $12.99
- Show “No products found” if list is empty

```
https://fakestoreapi.com/products
https://fakestoreapi.com/products/categories
https://fakestoreapi.com/products/category/{category}
```

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
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    // TODO: Fetch products when category changes
  }, [selectedCategory]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {/* TODO: Render category options */}
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

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        );
        if (!response.ok) throw new Error(`Failed: ${response.status}`);
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products when category changes
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`,
        );
        if (!response.ok)
          throw new Error(`Failed to fetch products: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        disabled={loading}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && selectedCategory && products.length === 0 && (
        <p>No products found</p>
      )}

      <ul>
        {products.map(({ id, title, price }) => (
          <li key={id}>
            {title}, ${price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Improvement (draft)

---

## Q2: Posts API - mm/dd

**📋 Requirements**

- https://jsonplaceholder.typicode.com/posts

1. Fetch Data
   - Fetch posts when the component mounts.
   - Handle loading and error states.

2. Dropdown (Form)
   - Create a dropdown to filter posts by userId.
   - Default option: “All Users”

3. Display Data
   - Post title
   - Post body
   - User ID

**⭐ Bonus (Optional)**

- Sort posts alphabetically by title
- Limit display to first 10 results
- Extract the dropdown into a reusable component

```js
// App.jsx
import { useEffect, useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: fetch posts from the API
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  // TODO: filter posts based on selectedUser

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Post List</h2>

      {/* Dropdown */}
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="all">All Users</option>
        {/* TODO: render userId options */}
      </select>

      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Post List */}
      <ul>{/* TODO: render posts */}</ul>
    </div>
  );
}
```

### Answer

✅ Final Corrected Snippets (Only What Matters)

```js
<select value={selectedUser} onChange={handleUserChange}>
  <option value="all">All Users</option>
  {userIdList.map((userId) => (
    <option key={userId} value={userId}>
      {userId}
    </option>
  ))}
</select>;

//Filter
const filtered =
  selectedUser === 'all'
    ? posts
    : posts.filter((d) => d.userId === Number(selectedUser));
```

### Improvement (draft)
