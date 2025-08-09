# Accordion

- https://www.greatfrontend.com/questions/user-interface/accordion/react?framework=react

## useState with an object

```js
const [openSection, setOpenSection] = useState({
  html: false,
  css: false,
  js: false,
});

const handleClick = (section) => {
  setOpenSection((prev) => ({
    ...prev,
    [section]: !prev[section],
  }));
};
```
