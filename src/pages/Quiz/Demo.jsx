export default function Demo() {
  return (
    <>
      <h1>IF vs Ternary</h1>
      <UserStatus isLoggedIn={true} />
    </>
  );
}

const UserStatus = ({ isLoggedIn }) => {
  let message = '';
  if (isLoggedIn) {
    message = <p>User logged in.</p>;
  } else {
    message = <p>Not logged in</p>;
  }
  return <div>{message}</div>;
};
