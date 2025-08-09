import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(t);
  }, [count]);

  return <div>{count}</div>;
};

export default Stopwatch;

