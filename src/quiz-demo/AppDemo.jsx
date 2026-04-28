import { useState, useEffect } from 'react';

// export default function AppDemo() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log(count);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []); //runs onmount only

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }

export default function UserStatus({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}

const UserStatus = ({ isLoggedIn }) => {
  let message = '';
  if (isLoggedIn) {
    message = <p>Welcome back!</p>;
  } else {
    message = <p>please log in.</p>;
  }

  return <div>{message}</div>;
};
