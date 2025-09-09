# Accordion

**Summary:**

- `useState` with an object
- How to update an state object
- How to show/hide div element without CSS

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

```
- useState with an object
- how to update an state object
- how to show/hide div element
```
