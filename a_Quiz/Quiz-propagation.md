# Quiz Propagation

- [Quiz Propagation](#quiz-propagation)
  - [Q1: Propagation](#q1-propagation)
    - [Hint](#hint)
    - [Answer](#answer)
  - [Propagation](#propagation)

<!-- create index  Cmd+Shift+P -->

## Q1: Propagation

- [Challenge 1 of 3: Add and remove a CSS class](https://react.dev/learn/reacting-to-input-with-state#add-and-remove-a-css-class)

```js
export default function Picture() {
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
      />
    </div>
  );
}
```

### Hint

- A single boolean state variable is enough to remember whether the image is active.
- You also need to stop the propagation so that clicking the image doesn’t register as a click on the background.

### Answer

```js
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
      />
    </div>
  );
}
```

## Propagation

-
