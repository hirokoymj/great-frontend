import { useState, useEffect, useCallback } from 'react';
import './style.css';

function ProgressBar({ id }) {
  const [width, setWidth] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval;
    if (width < 100) {
      interval = setInterval(() => {
        setWidth((prevWidth) => prevWidth + 1);
      }, 20);
    }

    return () => clearInterval(interval);
  }, [width, id]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${width}%` }}></div>
    </div>
  );
}

export default function ProgressBarDemo() {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    setBars((prevBars) => [...prevBars, { id: Date.now(), completed: false }]);
  };

  console.log(bars.length);

  return (
    <div>
      <button onClick={addProgressBar}>Add</button>
      {bars.map((bar) => (
        <ProgressBar key={bar.id} />
      ))}
    </div>
  );
}
