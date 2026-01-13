import { useRef, useState } from 'react';

export default function UseRefQuiz() {
  // Q6
  const inputRef = useRef(null);
  // Q6 Answer
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // Q7
  const renderCount = useRef(0); //⚠️
  // 07 Answer - increments renderCount in the component body.
  renderCount.current++;
  console.log('Render count:', renderCount.current);

  // Q8
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  return (
    <div style={{ padding: 20 }}>
      <h2>useRef Quiz</h2>

      {/* Q6 */}
      <section>
        <h3>Q6: Focus Input</h3>
        <input ref={inputRef} />
        <button onClick={handleFocus}>Focus Input</button>
      </section>

      <hr />

      {/* Q7 */}
      <section>
        <h3>Q7: Render Count</h3>
        <p>Open console to see render count</p>
      </section>

      <hr />

      {/* Q8, Answer*/}
      <section>
        <h3>Q8: Previous Value</h3>
        <p>Current: {count}</p>
        <p>Previous: {prevCount.current}</p>
        <button
          onClick={() =>
            setCount((prev) => {
              prevCount = prev;
              return prev + 1;
            })
          }>
          +
        </button>
      </section>
    </div>
  );
}
