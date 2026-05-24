const promise1 = fetch('/api/user');
const promise2 = fetch('/api/settings');

Promise.all([promise1, promise2])
  .then((results) => {
    const [user, settings] = results; // Destructuring results in order
    console.log('Both loaded!');
  })
  .catch((error) => {
    console.error('One failed:', error); // Catches the FIRST rejection
  });
