# Node.js File System (fs/promises)

## readdir()

```js
import { readdir, stat } from 'fs/promises';
const files = await readdir(dir);
```

## stat

```js
const filePath = path.join(dir, file);
const info = await stat(filePath);
console.log(`Size     : ${info.size} bytes`);
console.log(`Created At : ${info.birthtime}`);
```

## Promise.all

- Promise.all() is a static method used to execute multiple asynchronous operations concurrently and wait for all of them to complete.

```js
await Promise.all(
  files.map(async (file) => {
    const filePath = path.join(dir, file);
    const info = await stat(filePath);

    console.log(`Size     : ${info.size} bytes`);
    console.log(`Created At : ${info.birthtime}`);
  }),
);
```

**Example 2**

```js
const promise1 = fetch('/api/user');
const promise2 = fetch('/api/settings');

Promise.all([promise1, promise2])
  .then((results) => {
    const [user, settings] = results;
    console.log('Both loaded!');
  })
  .catch((error) => {
    console.error('One failed:', error); // Catches the FIRST rejection
  });
```

**Example 3**

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
```

## Synchronous approach:

- **blocking functions**: **waits** for each operation to complete,

## Asynchronous approach:

- **non-blocking functions**: it never waits for each operation to complete,

## References:

- https://nodejs.org/api/fs.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
