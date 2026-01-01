import { useEffect, useState } from 'react';

const useFetch = (url, enabled = true) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed : ${response.status}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, enabled]);

  return { data, loading, error };
};

export default function ProductList2() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {
    data: categories,
    loading: loading_categories,
    error: error_categories,
  } = useFetch('https://fakestoreapi.com/products/categories');

  const {
    data: products,
    loading: loading_products,
    error: error_products,
  } = useFetch(
    `https://fakestoreapi.com/products/category/${selectedCategory}`,
    Boolean(selectedCategory)
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      {loading_categories && <p>Loading...</p>}
      {error_categories && <p style={{ color: 'red' }}>{error_categories}</p>}

      <ul>
        {products.map(({ id, title, price }) => (
          <li key={id}>
            {title}, ${price.toFixed(2)}
          </li>
        ))}
      </ul>
      {products.length === 0 && <p>No products found</p>}
    </div>
  );
}
