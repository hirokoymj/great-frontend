## React

| Topic                    |
| ------------------------ |
| RESTful API              |
| Form Handling            |
| State (Object)           |
| State (Array of Objects) |
| useMemo Hook             |
| useMemo vs useCallback   |
| useRef Hook              |
| Add / Remove CSS Class   |
| Custom Hook              |

| Time | Mon (1/5)    | Tue (1/6)    | Wed (12/31) | Thu (1/1)   | Fri (1/2)     | Sat (1/3)     | Sun (1/4) |
| ---- | ------------ | ------------ | ----------- | ----------- | ------------- | ------------- | --------- |
| AM   | AI           | AI           | RESTful API | RESTful API | Form Handling | AI            | Work      |
| PM   | useMemo Hook | useMemo Hook |             |             |               | Form Handling | Relax     |

# React.js Coding Challenge

## Weekly 1

| Weekly 1 | Mon (12/29) | Tue (12/30) | Wed (12/31)   | Thu (1/1)     | Fri (1/2)      | Sat (1/3)      | Sun (1/4)                |
| -------- | ----------- | ----------- | ------------- | ------------- | -------------- | -------------- | ------------------------ |
| AM       | AI (RAC)    | AI (RAC)    | AI (RAC)      | AI (RAC)      | AI (RAC)       | AI (RAC)       | Work                     |
| PM       | RESTful API | RESTful API | Form Handling | Form Handling | State (Object) | State (Object) | State (Array of Objects) |

## Weekly 2

| Time | Mon (1/5)                | Tue (1/6)    | Wed (1/7)    | Thu (1/8)              | Fri (1/9)              | Sat (1/10)           | Sun (1/11)           |
| ---- | ------------------------ | ------------ | ------------ | ---------------------- | ---------------------- | -------------------- | -------------------- |
| AM   | AI                       | AI           | AI           | AI                     | AI                     | AI                   | Work                 |
| PM   | State (Array of Objects) | useMemo Hook | useMemo Hook | Add / Remove CSS Class | Add / Remove CSS Class | RESTful API (Object) | RESTful API (Object) |

## Weekly 3

| Time | Mon (1/12)  | Tue (1/13)  | Wed (1/14)             | Thu (1/15)             | Fri (1/16)               | Sat (1/17)               | Sun (1/18) |
| ---- | ----------- | ----------- | ---------------------- | ---------------------- | ------------------------ | ------------------------ | ---------- |
| AM   | AI          | AI          | AI                     | AI                     | AI                       | AI                       | Work       |
| PM   | useRef Hook | useRef Hook | Add / Remove CSS Class | Add / Remove CSS Class | Form Handling (Advanced) | Form Handling (Advanced) | Review     |

## Weekly 4

| Time | Mon (1/19)           | Tue (1/20)           | Wed (1/21)            | Thu (1/22)            | Fri (1/23)            | Sat (1/24)            | Sun (1/25)          |
| ---- | -------------------- | -------------------- | --------------------- | --------------------- | --------------------- | --------------------- | ------------------- |
| AM   | AI                   | AI                   | AI                    | AI                    | AI                    | AI                    | Work                |
| PM   | RESTful API (Review) | RESTful API (Review) | State (Object) Review | State (Object) Review | Mock Coding Challenge | Mock Coding Challenge | Full Review / Notes |

## Topic (details)

**RESTful API**

- URL: https://jsonmock.hackerrank.com/api/football_competitions?year=${year} //2011, 2012, 2013
- URL: https://jsonplaceholder.typicode.com/users
- [Airline data](./src/pages/airport/data.js)
- [Array of objects in State: Todos](https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-non-mutative-methods)
- [Sharing State btw components](https://react.dev/learn/sharing-state-between-components#filtering-a-list)

**Form**

- Multi checkbox
- Form: FirstName, lastName, checkbox, textarea, empty error check
- [multi checkbox](https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection)
- [redundant state variable, listItems, checkboxes](https://react.dev/learn/choosing-the-state-structure#fix-a-broken-packing-list)

<hr />

**Object in State**

- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates)

<hr />

**useMemo**

- [Cache, useMemo](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects)

<hr />

**useRef**

- [useRef](https://react.dev/learn/referencing-values-with-refs#fix-a-broken-chat-input)

<hr />

**Add and remove a CSS class**

- `e.stopPropagation()`
- event handler- Function reference, Arrow Function Wrapper, Function call (!!Wrong!!)
<hr />

**Initial render**

- React.createRoot()

<hr />

## Prompt template

- Goal:
- Pleas create a React.js coding challenge. Here are the details:
- Test Duration: 15 minutes.
- A starter boilerplate
- - [Updating Objects in State](https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates)

## Draft

- `e.stopPropagation()`
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
