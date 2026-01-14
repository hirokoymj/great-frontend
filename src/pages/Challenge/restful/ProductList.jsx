import { useEffect, useState } from 'react';

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Fetch categories on mount
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        if (!response.ok) throw new Error(`Failed : ${response.status}`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    // TODO: Fetch products when category changes
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        if (!response.ok)
          throw new Error(`Failed get product -${response.status} `);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  //❌ Calling setProducts during render
  //❌Infinite Loop Trigger: Calling setUsers directly in the body of a component
  //  (outside of a useEffect or an event handler) triggers a re-render, which calls setUsers again, leading to a crash or an infinite loop.
  //   const filteredProducts = setProducts((prev) =>
  //     prev.filter((d) => d.category === selectedCategory)
  //   );

  //   const filteredProducts = products.fileter(
  //     (d) => d.category === selectedCategory
  //   );

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

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

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
