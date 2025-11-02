import { useState } from 'react';

export default function Picture() {
  const [toggle, setToggle] = useState(false);
  let backgroundClass = 'background background--active';
  let pictureClass = 'picture';

  // When the image is active, the CSS classes are background and picture picture--active.
  // When the image is inactive, the CSS classes are background background--active and picture.

  if (toggle) {
    backgroundClass = 'background';
    pictureClass += 'picture--active';
  } else {
    backgroundClass += 'background--active';
    pictureClass = 'picture';
  }

  return (
    <div className={backgroundClass} onClick={()=> }>
      <img
        className={pictureClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => setToggle((toggle) => !toggle)}
      />
    </div>
  );
}
