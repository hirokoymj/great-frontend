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
