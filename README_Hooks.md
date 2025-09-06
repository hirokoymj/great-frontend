# useState vs useRef

| Feature      | useState                            | useRef                                                    |
| ------------ | ----------------------------------- | --------------------------------------------------------- |
| Re-render    | Triggers re-render on value change. | Does not trigger re-render on value change.               |
| Purpose      | Manages state that affects UI.      | Creates mutable references, often for DOM or non-UI data. |
| Value Access | Accessed directly (e.g., count).    | Accessed via .current property (e.g., inputRef.current)   |
| Mutability   | setter function                     | Ref.current property                                      |

# useRef

- [Click counter](https://react.dev/reference/react/useRef#click-counter)
- a button, click, increment count
- [A stopwatch](https://react.dev/reference/react/useRef#a-stopwatch)
- https://www.youtube.com/watch?v=42BkpGe8oxg&t=216s

# Quiz

**Question 1:**

- Differences btw useState and useRef
