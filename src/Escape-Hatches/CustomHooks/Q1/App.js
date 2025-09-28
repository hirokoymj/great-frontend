import { useState, useEffect } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return count;
};

export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
