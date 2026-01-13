import { useState } from 'react';
import './styles.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  let containerStyle = 'container';
  let btnStyle = 'btn';

  if (isActive) {
    containerStyle = `${containerStyle} active`;
  }
  if (isHighlighted) {
    btnStyle = `${btnStyle} highlight`;
  }

  function handleContainerClick() {
    setIsActive(!isActive); //-> Re-rendering triggers and containerStyle will be updated.
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    setIsHighlighted(!isHighlighted); //-> Re-rendering triggers and btnStyle will be updated.
  }

  const handleReset = () => {
    setIsActive(false);
    setIsHighlighted(false);
    //when re-rendering happnes, the values of containerStyle and btnStyle are initialized.
  };

  return (
    <div className={containerStyle} onClick={handleContainerClick}>
      <p>Clicking this container toggles "active"</p>

      <button className={btnStyle} onClick={handleButtonClick}>
        Click Me
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
