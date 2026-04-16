# Topic xxx

## ~~Q1. Class state merging❌~~

## Q2. Lifting state up✅

## Q3. Controlled vs uncontrolled✅

## Q4. Children prop✅

## Q5. Context API / prop drilling✅

## ~~Q6. Class → functional lifecycle✅~~

## Q7. JSX boolean attributes✅

## Q8. Inverse data flow❌

Q8 — Inverse data flow = Child calls a Parent callback to update Parent's existing state. Different from lifting state up which is a refactoring action.

### Answer

- **Lifting state up** means you move state that was in a Child component up to the Parent — it's a refactoring action.
- **Inverse data flow** means the state already lives in Parent, and the Child calls a callback to update it — data flows upward from Child to Parent.

## Q9. Prop drilling + Context fix✅

## Q10. Batched setState in class✅
