import { readdir, stat } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, 'test');

const readFolder = async (dir) => {
  try {
    const files = await readdir(dir);
    files.forEach((file) => console.log(file));
  } catch (err) {
    console.error('Error:', err);
  }
};

const readFileInfo = async (dir) => {
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
    console.error('Error:', err);
  }
};

//readFolder(dir);

readFileInfo(dir);

//Promise.all() is a static method used to execute multiple asynchronous operations concurrently and wait for all of them to complete. It takes an iterable (usually an array) of promises as input and returns a single Promise.
