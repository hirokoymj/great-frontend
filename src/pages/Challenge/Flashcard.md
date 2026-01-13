## 🃏 Flashcards: Temperature, TopP, TopK

Q1: What does Temperature control?<br />
A: Randomness of the output.

<hr />

Q2: What happens when Temperature is low?<br />
A: Output is predictable and factual.

<hr />

Q3: What happens when Temperature is ≥ 1.0?<br />
A: It becomes hallucination-prone.

<hr />

Q4: What does TopK control?<br />
A: How many tokens are considered (fixed number).

<hr />

Q5: What happens when TopK is low?<br />
A: Very few token choices.

<hr />

Q6: What happens when TopK is high?<br />
A: More choices, but limited to a fixed number.

<hr />

Q7: What does TopP control?<br />
A: Token selection by probability mass.

<hr />

Q8: What happens when TopP is low?<br />
A: Only very safe, common words are used.

<hr />

Q9: What happens when TopP is high?<br />
A: A larger pool of words is considered (adaptive).

<hr />

Q10: Complete the sentence:
Temperature controls **\_\_\_\_**, while TopP and TopK control **\_\_\_\_** **\_\_\_\_**.<br />

A: Randomness; token selection boundaries.

<hr />

## 🃏 Error Boundary

An Error Boundary is a React class component that renders a fallback UI when a child throws an error, using static getDerivedStateFromError.

**Flashcard 1 — Definition**

Q: What is an Error Boundary in React?

A: A React class component that renders a fallback UI when a child throws an error, using static getDerivedStateFromError.

<hr />

**Flashcard 2 — Why class component?**

Q: Why must an Error Boundary be a class component?

A: Because React only supports error-catching lifecycle methods (getDerivedStateFromError, componentDidCatch) in class components.

<hr />

**Flashcard 3 — Trigger condition**

Q: When does an Error Boundary render its fallback UI?

A: When a child component throws an error during render, lifecycle methods, or constructors.

<hr />

**Flashcard 4 — Core method**

Q: What does static getDerivedStateFromError do?

A: It returns a state object that tells React to render the fallback UI on the next render.

<hr />

**Flashcard 5 — What it does NOT catch**

Q: Which errors are NOT caught by Error Boundaries?

A: Errors in event handlers, async code, and setTimeout / promises.

<hr />

**Flashcard 6 — Data fetching pattern**

Q: How do you use Error Boundaries with data fetching errors?
A: Catch the async error, store it in state, then throw it during render.

<hr />
