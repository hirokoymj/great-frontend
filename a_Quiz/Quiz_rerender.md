# React re-render

- [React re-render](#react-re-render)
  - [Q1: In what situations will a React component re-render?](#q1-in-what-situations-will-a-react-component-re-render)
  - [Q2: How to Prevent Unnecessary Re-renders](#q2-how-to-prevent-unnecessary-re-renders)

## Q1: In what situations will a React component re-render?

1. State change
   useState or useReducer — any state update schedules a re-render.

2. Props change
   When a parent passes new prop values down to a child, the child re-renders.

3. Parent re-renders
   By default, when a parent re-renders, all its children re-render too — even if their props didn't change.

4. Context change
   When a Context value changes, every component consuming that context via useContext re-renders.

## Q2: How to Prevent Unnecessary Re-renders

- React.memo — skips re-render if props haven't changed
- useMemo — memoizes an expensive computed value
- useCallback — memoizes a function reference so it doesn't look "new" to a child on every render
