🔄 Runtime Flow (Interview Gold)

Profile mounts

useEffect starts fetching data

API fails (network / 500 / 404)

.catch() runs → setError(err)

React re-renders

if (error) throw error

Error Boundary catches it

Fallback UI rendered

✔️ App doesn’t crash
✔️ Error isolated
✔️ Centralized logging

🧩 One-sentence interview answer

“For data fetching, I catch async errors, store them in state, and re-throw during render so Error Boundaries can handle them.”
