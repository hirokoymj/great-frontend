import { useState } from 'react';

export default function AppDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count > 0 && <p>Count is: {count}</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
