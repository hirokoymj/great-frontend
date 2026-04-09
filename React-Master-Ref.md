# React Reference

## useState (object)

✅

```js
//====spread operator(...), []
const [person, setPerson] = useState({
  firstName: 'Barbara',
  lastName: 'Hepworth',
});

function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
<button onClick={handlePlusClick}>
<input value={player.firstName} onChange={handleFirstNameChange} />
```

✅

```js
useState - Trigger re-render on value change, Affect UI
useRef - Does NOT trigger re-render on value change, Not affect UI using
```

## RESTful

✅

```js
//===[async: try-catch]
- const getUser = async() =>{ try{}catch(e){} }
- const response = await fetch(url);
- if (!response.ok) throw new Error();
- const data = await response.json();
- setUsers(data);
```

**draft**

```js
//=====[async: try-catch]
const getUser = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const data = await response.json();
    setUsers(data);
  } catch (e) {}
};
//=====[async: then.catch]
const getUser = () =>{
	fetch(url, option)
	.then(response=>{ if(response.ok) return response.json()})
	.then(data=>{})
	.catch(e=>{})
	.finally(()=>{})
}
//=====[HTTP Options]
------------------------------
method: 'GET/POST/PUT/DELETE'
headers: {
	'Authorization': `Bearer ${token}`,
	'Content-Type': 'application/json'
},
body: JSON.stringify({ user }) //POST
body: JSON.stringify({ ...user, name: 'dummy' }) //PUT
------------------------------
// useEffect(()=>{}, [])
```

## useState (array)

- ADD: `[...arr, newItem]`, DELETE: `filter`, REPLACE: `map`

```js
// Add
setArtists([
	...artists,
	{id: nextId++, name}
]
// Remove
setArtists(artists.filter((a) => a.id !== artist.id));
// Change
setTodos(todos.map(t => {
if (t.id === nextTodo.id) {
	return nextTodo;
} else {
	return t;
}
}));
```

## useMemo
