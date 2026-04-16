import { useState, useEffect } from 'react';

export default function AppDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => clearInterval(timer);
  }, []); //runs onmount only

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
