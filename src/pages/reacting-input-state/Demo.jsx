import { useState } from 'react';

//show/hide background--active

// image - picture, picture/picture--active
// BG - background, background/background--active

// When the image is active, the CSS classes are background and picture picture--active.
// When the image is inactive, the CSS classes are background background--active and picture.

export default function Picture() {
	const [active, setActive] = useState(false);
	
	let backgroundClass = "background background--active"
	let imageClass = "picture"
	if (active) {
		backgroundClass = "background";
		imageClass = "picture picture--active"
	} else {
		
	}

  return (
    <div className={active ? 'background' : 'background background--active'}>
      <img
        className={active ? 'picture picture--active' : 'picture'}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setActive((prev) => (active = !prev))}
      />
    </div>
  );
}
