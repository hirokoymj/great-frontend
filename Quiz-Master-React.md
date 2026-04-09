# Quiz - Master - React

## Quiz

- [Quiz-state.md](./Quiz-state.md)
- [Quiz-state-array.md](./Quiz-state-array.md)
- [Quiz-useMemo](./Quiz-useMemo.md)
- [Quiz-useCallback](./Quiz-useCallback.md)
- [Quiz-rendering](./Quiz-rendering.md)

## React

| Topic                    | Date  | Ref.                                              |
| ------------------------ | ----- | ------------------------------------------------- |
| RESTful API              |       | [RESTful](./Quiz-MasterTbl.md#restful-api-syntax) |
| State (Object) + Form    |       |                                                   |
| State (Array of Objects) |       |                                                   |
| useMemo                  | 04/06 |                                                   |
| useCallback              | 04/06 |                                                   |
| useRef                   |       |                                                   |
| Add / Remove CSS Class   |       |                                                   |
| Rendering                | 04/07 |

## Ref; State (object)

- [Managing State](./README.md#managing-state)

```js
const [selectedIds, setSelectedIds] = useState([]); //[0,1]
selectedIds.includes(id) ==> true/false
selectedIds.includes(toggledId)
  ? setSelectedIds((prev) => prev.filter((id) => id !== toggledId))
  : setSelectedIds((prev) => [...prev, toggledId]);

[state, dispatch] = useReducer()
action == {type: xxx}
dispatch(action)

import {createContext, useContext, useState} from "react"
Const ImageSizeContext = createContext(500);
Const value = 100;
<ImageSizeContext value={value}></ImageSizeContext>
Const imageSize = useContext( ImageSizeContext )
<img width={imageSize} />
Ternary ->{ condition ? () : () }
```

## Ref: RESTful Summary

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
