//==========(Reacting, C1,10/28)
import { useState } from 'react';

export default function Picture() {
  //const [pictureActive, setPictureActive] = useState(false);
  const [isActive, setActive] = useState(false);
  //you need to calculate both CSS classes based on the current state.
  //When the image is active, the CSS classes are background and picture picture--active.
  //When the image is inactive, the CSS classes are background background--active and picture.
  let bgClass = 'background';
  let imgClass = 'picture';
  if (isActive) {
    imgClass += ' picture--active';
  } else {
    bgClass += ' background--active';
  }

  let backgroundClass = 'background background--active'; //WRONG --> When the state change, re-render happens.
  let pictureClass = 'picture';

  if (pictureActive) {
    pictureClass += 'picture--active'; //WRONG -> " picture--active"
    backgroundClass = 'background'; //WRONG
  } else {
    pictureClass = 'picture'; //WRONG -> " picture"
    backgroundClass += 'background--active'; //WRONG -> " background--active"
  }

  return (
    <div
      className={backgroundClass}
      onClick={() => {
        setPictureActive(false); //OK
      }}>
      <img
        className={pictureClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation(); //OK
          setPictureActive(true); //OK
        }}
      />
    </div>
  );
}
// Two classNames==space ex. className="background background--active"
// <div onClick><img onClick={e.stopPropergation()}
// const [isActive, setActive]

const [isActive, setIsActive] = useState(false);
let backgroundClassName = 'background';
let pictureClassName = 'picture';
if (isActive) {
  pictureClassName += ' picture--active';
} else {
  backgroundClassName += ' background--active';
}
//==========(Reacting, C1,10/28)
