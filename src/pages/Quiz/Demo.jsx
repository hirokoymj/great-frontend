import { useState } from 'react';
import './styles4.css';

export default function Demo() {
  const [imgActive, setImgActive] = useState(false);

  let bg_class = 'background';
  let img_class = 'picture';
  if (imgActive) {
    img_class = img_class + ' picture--active';
  } else {
    bg_class = bg_class + ' background--active';
  }

  console.log(bg_class);
  console.log(img_class);

  return (
    <div className={bg_class} onClick={() => setImgActive(false)}>
      <img
        className={img_class}
        alt="Rainbow houses"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setImgActive(true);
        }}
      />
    </div>
  );
}
