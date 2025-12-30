# Technical Notes – Master Table

## JavaScript

[draft](./src/pages/JS/README.md)

| No. | Category    | Topic / Method                   | Mutates? | Notes                                                    |
| --- | ----------- | -------------------------------- | -------- | -------------------------------------------------------- |
| 1   | **Array**   | `Array.some(callback)`           |          | Stops early, returns boolean                             |
| 2   | **Array**   | `Array.includes(value)`          |          | Returns `true / false`                                   |
| 3   | **Array**   | `Array.filter(callback)`         |          | Returns a **new array** (`[a]` or `[]`)                  |
| 4   | **Array**   | `Array.find(callback)`           |          | Stops early, returns **element or `undefined`**          |
| 5   | **Array**   | `Array.reduce((acc,data)=>{},0)` |          | Reducer may mutate accumulator                           |
| 6   | **Array**   | `Array.forEach()`                |          | 🚫 No early termination                                  |
| 7   | **Array**   | `Array.map()`                    |          | 🚫 No early termination                                  |
| 8   | **Array**   | `Array.indexOf(value)`           |          | Returns index `n` or `-1`                                |
| 9   | **Array**   | `Array.join()`                   |          | Array → string                                           |
| 10  | **Array**   | `Array.pop()`                    | ✅ Yes   | Removes last element                                     |
| 11  | **Array**   | `Array.shift()`                  | ✅ Yes   | Removes first element                                    |
| 12  | **Array**   | `Array.sort()`                   | ✅ Yes   | Sorts in place                                           |
| 13  | **Array**   | `Array.splice()`                 | ✅ Yes   | Adds/removes items. `arr.splice(removeIndex,1)`          |
| 13  | **Array**   | `Array.slice(start, end)`        | ❌ No    | Returns a portion of an array. `arr.slice(0, 10)`        |
| --- | ----------- | -------------------------------- | -------- | -------------------------------------------------------- |
| 14  | **Loop**    | `for` loop                       |          | `for (let i=0;i<max;i++) {}`                             |
| 15  | **Obj**     | `for...in`                       |          | `for (const key in obj)`                                 |
| 16  | **Obj**     | `in`                             |          | Checks whether a property exists. `"make" in car`        |
| 17  | **Obj/Arr** | Spread operator (`...`)          |          | Expands items. `const newObj={...item}`                  |
| 18  | **Obj/Arr** | Rest operator (`...rest`)        |          | **Collects** multiple items. `const [a,...rest]=[a,b,c]` |
| --- | ----------- | -------------------------------- | -------- | -------------------------------------------------------- |
| 19  | **Str**     | `String.replace()`               |          | `str.replace(/\s+/i,'')`                                 |
| 20  | **Str**     | `String.slice()`                 |          | `":cry:".slice(1,-1) → "cry"`                            |
| 21  | **Str**     | `String.split("")`               |          | Returns array                                            |
| 22  | **Str**     | `String.startsWith()`            |          | `str.startsWith(":") → true/false`                       |
| 23  | **Str**     | `String.endsWith()`              |          | `str.endsWith(":") → true/false`                         |
| 24  | **Str**     | `String.padStart()`              |          | `"5".padStart(2,"0") → "05"`                             |
| 25  | **Str**     | String char access               |          | Strings are **array-like**, read-only                    |
| 26  | **Str**     | `text[index]`                    |          | `"tree"[0] → "t"`                                        |
| --- | ----------- | -------------------------------- | -------- | -------------------------------------------------------- |
| 27  | **Math**    | Division                         |          | `const result=10/3`                                      |
| 28  | **Math**    | Remainder (`%`)                  |          | `const remainder=10%3`                                   |
| 29  | **Math**    | Even number check                |          | `a%2===0`                                                |
| 30  | **Math**    | Odd number check                 |          | `a%2!==0`                                                |
| 31  | **Math**    | Float check                      |          | `a%1!==0`                                                |
| 32  | **Math**    | Integer check                    |          | `a%1===0`                                                |
| 33  | **Math**    | `Math.ceil(1.4)`                 |          | `→ 2`                                                    |
| 34  | **Math**    | `Math.floor(1.6)`                |          | `→ 1`                                                    |
| 35  | **Math**    | `Math.round(2.4)`                |          | `→ 2`                                                    |
| 36  | **Math**    | `Math.max(...array)`             |          | Returns max value                                        |
| 37  | **Math**    | `Math.min(...array)`             |          | Returns min value                                        |
| 38  | **Math**    | `Math.abs()`                     |          | Absolute value                                           |
| 39  | **Math**    | `Math.pow()`                     |          | `Math.pow(10,5) → 100000`                                |
| 40  | **Math**    | `Math.random()`                  |          | `Math.floor(Math.random()*arr.length)`                   |
| --- | ----------- | -------------------------------- | -------- | -------------------------------------------------------- |
| 41  | **Misc**    | `switch()`                       |          | Control statement                                        |
| 42  | **Misc**    | `switch(true)`                   |          | Conditional switch                                       |
| 43  | **Misc**    | `return` (end function)          |          | Ends function execution                                  |
| 44  | **Misc**    | `return` (return value)          |          | `return 0`, `return true`, `return 123`                  |
| 45  | **Misc**    | `typeof {}`                      |          | Returns `"object"`                                       |
| 46  | **Misc**    | `typeof null`                    |          | Returns `"object"` (JS quirk)                            |
| --- | ----------- | -------------------------------- | -------- | -------------------------------------------------------- |

## React

**Initial render**

- React.createRoot()
<hr />

**useRef**

- [useRef](https://react.dev/learn/referencing-values-with-refs#fix-a-broken-chat-input)
<hr />

**Add and remove a CSS class**

- `e.stopPropagation()`
- event handler- Function reference, Arrow Function Wrapper, Function call (!!Wrong!!)
<hr />

**Object in State**

- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates)

<hr />

**RESTful API + FORM**

- URL: https://jsonmock.hackerrank.com/api/football_competitions?year=${year} //2011, 2012, 2013
- URL: https://jsonplaceholder.typicode.com/users
- [Airline data](./src/pages/airport/data.js)
- [Array of objects in State: Todos](https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-non-mutative-methods)
- [Sharing State btw components](https://react.dev/learn/sharing-state-between-components#filtering-a-list)

<hr />

**Form**

- Multi checkbox
- Form: FirstName, lastName, checkbox, textarea, empty error check
- [multi checkbox](https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection)
- [redundant state variable, listItems, checkboxes](https://react.dev/learn/choosing-the-state-structure#fix-a-broken-packing-list)

<hr />

**useMemo**

- [Cache, useMemo](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects)

<hr />

## pagination

```js
const [currentPage, setCurrentPage] = useState(1);
const PAGE_SIZE = 10;
const totalPage = Math.ceil(data.length / PAGE_SIZE);
const start = (currentPage - 1) * PAGE_SIZE;
const end = startIndex + PAGE_SIZE;
const paginatedTodos = data.slice(start, end);
<button onClick={() => setCurrentPage((p) => p - 1)} />
<button onClick={() => setCurrentPage((p) => p + 1)} />
```

- Prompt template
- Pleas create a React.js coding challenge. Here are the details:
- React.js
- Test Duration: 15 minutes.
- A starter boilerplate

<!-- - `e.stopPropagation()`
- event handler- Function reference, Arrow Function Wrapper, Function call (!!Wrong!!)
- Initial render(React.createRoot())
- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates)
- [Array of objects in State: shopping cart](https://react.dev/learn/updating-arrays-in-state#remove-an-item-from-the-shopping-cart)
- [Array of objects in State: Todos](https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-non-mutative-methods)
- [Add and remove a CSS class]()
- [redundant state variable, listItems, checkboxes](https://react.dev/learn/choosing-the-state-structure#fix-a-broken-packing-list)
- Form - FirstName, lastName, checkbox, textarea
- Display data from RESTful APIs.
- (https://codesandbox.io/p/sandbox/football-matches-data-react-3ihv2)
- [Cache, useMemo](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects)
- [multi checkbox](https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection)
- [Sharing State btw components](https://react.dev/learn/sharing-state-between-components#filtering-a-list)
- [useRef](https://react.dev/learn/referencing-values-with-refs#fix-a-broken-chat-input)
- Fetch
  - Users API: https://jsonplaceholder.typicode.com/users'
  - Football Match API: https://jsonmock.hackerrank.com/api/football_competitions?year=${year}
  - [Football Match UI](https://codesandbox.io/p/sandbox/football-matches-data-react-3ihv2?file=%2Fsrc%2Fcomponents%2Ffootball-data%2Findex.js%3A19%2C12-19%2C101)
  - [Airline data](./src/pages/airport/data.js) -->
