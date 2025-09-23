# Accordion - Sharing State between Components

```js
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}>With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>)
function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
```

- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components#step-3-add-state-to-the-common-parent)
- Accordion (Parent)
  - Panel (Child)
  - Panel
- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.

```js
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
```

**Summary:**

- `useState` with an object
- How to update an state object
- How to show/hide div element without CSS

```js
const [section, setSection] = useState({
  html: false,
  css: false,
  js: false,
});
setSection((prev) => ({
  ...prev,
  [section]: !prev[section],
})
{section['html'] && (<div>a</div>)}
```

## useState with an object

```js
// useState with an object
const [openSection, setOpenSection] = useState({
  html: false,
  css: false,
  js: false,
});
// How to update an state object
const handleClick = (section) => {
  setOpenSection((prev) => ({
    ...prev,
    [section]: !prev[section],
  }));
};
// How to show/hide div element without CSS
{
  section['css'] && <div>a</div>;
}
```

# Quiz: Build Accordion

- [quiz-original](https://www.greatfrontend.com/questions/user-interface/accordion/react?framework=react)
- [quiz-template](./quiz-template.jsx)
- History: 09-09-2025

Q1:useState with an object

Q2:how to update an state object

Q3:how to show/hide div element
