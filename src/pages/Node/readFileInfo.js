import { readdir, stat } from 'fs/promises';
import path from 'path';

// === EX1
console.log('=== EX1');
const dir = 'test';

try {
  const files = await readdir(dir);

  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const info = await stat(filePath);

      console.log(`Size     : ${info.size} bytes`);
      console.log(`Is Dir   : ${info.isDirectory()}`);
      console.log(`Created At : ${info.birthtime.toISOString()}`);
      console.log('---');
    }),
  );
} catch (err) {
  console.error('Error', err);
}

// Promise.all(
//   files.map((file) => {
//     const filePath = path.join(dir, file);

//     return stat(filePath).then((info) => {
//       console.log(`Size       : ${info.size} bytes`);
//       console.log(`Created At : ${info.birthtime}`);
//     });
//   })
// ).then(() => {
//   console.log('All files processed!');
// }).catch((err) => {
//   console.error('Error:', err);
// });

// - async/await inside map() is replaced with .then() chained on stat()
// - return is required inside map() so Promise.all can track each promise
// - Error handling moves from try/catch to .catch() at the end

//async/await with Promise.all
