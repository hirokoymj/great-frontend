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
