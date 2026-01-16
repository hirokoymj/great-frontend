## Form Handling

## Summary (final)

- radio - Only the selected radio triggers onChange
- sort() - mutates the original array → XX
- state sort - `[...selected].sort((a, b) => a.localCompared(b))`

## Index

- SkilForm.jsx (multi-checkbox)
- ProfileForm.jsx (form handleing )

<hr />

**multi-checkbox**

🔴 sort() mutates the original array → mutating React state directly

```js
const sorted = [...selected].sort((a, b) => a.localeCompare(b));
```

**alphabetical sort**

```js
const items = ['apple', 'Zebra', 'banana'];
items.sort((a, b) => a.localeCompare(b));
```

🔴 radio

```js
const [formData, setFormData] = useState({
  level: '', //radio
  subscribe: false,
})

<label>
  <input
    type="radio"
    name="level"
    value="junior"
    checked={formData.level === 'junior'}
    onChange={handleChange}
  />
  Junior
</label>


- Only the selected radio triggers onChange
- value is always correct

const { name, value, type, checked } = e.target;
if (type === 'checkbox') {
  setFormData((prev) => ({ ...prev, [name]: checked }));
// } else if (type === 'radio') { !! DO NOT NEED !!
//   checked && setFormData((prev) => ({ ...prev, [name]: value }));
} else {
  setFormData((prev) => ({ ...prev, [name]: value }));
}


```

## Summary (draft)

- radio - Only the selected radio triggers onChange
- sort() - mutates the original array → XX
- state sort - `[...selected].sort((a, b) => a.localCompared(b))`
