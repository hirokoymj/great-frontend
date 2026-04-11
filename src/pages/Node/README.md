# Node.js File System (fs/promises)

- https://nodejs.org/api/fs.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

**Summary**

```js
import { readdir, stat } from 'fs/promises';
import path from 'path';

//Read a directory
const files = await readdir(dir);
files.forEach((file) => console.log(file));

// A file path
const filePath = path.join(dir, file);

//Print a file info - async/await with Promise.all
await Promise.all(
  files.map(async (file) => {
    const filePath = path.join(dir, file);
    const info = await stat(filePath);

    console.log(`Size     : ${info.size} bytes`);
    console.log(`Created At : ${info.birthtime}`);
  }),
);
```

Summary(drft)

```js
readdir, stat from "fs/promise"
path
//async-await - try-catch
files = await readdir(dir)

files.map((file) => console.log(file));

files.map((async file) => (
	filepath = path.join(dir, file);
	info = await stat()
	console.log(`${info.size}`)
))
const filepath = path.join(dir, file)
```

#### Synchronous approach:

- They are called **blocking functions** as it **waits** for each operation to complete,

#### Asynchronous approach:

- They are called **non-blocking functions** as it never waits for each operation to complete,
