import { useEffect, useState } from 'react';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Fetch categories on mount
    setLoading(true);
    setError(null);
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to categories');
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    // TODO: Fetch products when category changes
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((response) => {
        if (!response.ok)
          throw new Error('Failed to get products with a category');
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        disabled={loading}>
        <option value="">Select a category</option>
        {
          /* TODO: Render category options  - Array of string */
          categories.map(
            (
              category, //Array of string
            ) => (
              <option key={category} value={category}>
                {category}
              </option>
            ),
          )
        }
      </select>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {
          /* TODO: Render products */
          products.map(({ id, price, title }) => (
            <li key={id}>
              {title}, ${price.toFixed(2)}
            </li>
          ))
        }
      </ul>
      <div>
        {!loading && selectedCategory && products.length === 0 && (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

// Quick review summary

// Your .then() flow is good. The main problems were:

// syntax/typo issues
// categories are strings, not objects
// catch should set error state
// disabled / toFixed spelling
