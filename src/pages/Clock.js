import { useState } from 'react';
import './index.scss';

const App = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

	
const format = (value) => value.toString().padStart(2, '0');	
	
	
  function handleHoursUpButtonClick() {
    //TODO: implement this

    if(hours === "23") {
     setHours("00")
     return; 
    }
    
    const num = parseInt(hours) + 1;
    (num < 10) ? setHours(`0${num}`): setHours(num.toString());  
  }
  function handleHoursDownButtonClick() {
    //TODO: implement this
    if(hours === "00") return;
    const num = parseInt(hours) - 1;
    (num < 10) ? setHours(`0${num}`): setHours(num.toString());  
  }

  function handleMinutesUpButtonClick() {
    //TODO: implement this
    if(minutes === "59") {
     setMinutes("00")
     return; 
    }
    const num = parseInt(minutes) + 1;
    (num < 10) ? setMinutes(`0${num}`): setMinutes(num.toString()); 
  }

  function handleMinutesDownButtonClick() {
    //TODO: implement this
    if(minutes === "00") return;
    let num = parseInt(minutes) - 1;
    (num < 10) ? setMinutes(`0${num}`): setMinutes(num.toString());     
  }

  return (
    <div id="ClockUpdater" className="container">
      <div className="row">
        <button
          id="hours-up-button"
          onClick={handleHoursUpButtonClick}
          className="btn btn-outline-primary col"
        >
          &uarr;
        </button>

        <button
          id="minutes-up-button"
          className="btn btn-outline-primary col"
          onClick={handleMinutesUpButtonClick}
        >
          &uarr;
        </button>
      </div>

      <div className="row">
        <div id="clock" className="badge badge-primary col">
          {`${hours}:${minutes}`}
        </div>
      </div>

      <div className="row">
        <button
          id="hours-down-button"
          onClick={handleHoursDownButtonClick}
          className="btn btn-outline-primary col"
        >
          &darr;
        </button>

        <button
          id="minutes-down-button"
          className="btn btn-outline-primary col"
          onClick={handleMinutesDownButtonClick}
        >
          &darr;
        </button>
      </div>
    </div>
  );
};

export default App;
