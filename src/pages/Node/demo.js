import { readdir, stat } from 'fs/promises';
import path from 'path';

const dir = 'test';
try {
  const files = await readdir(dir);
  files.map((file) => console.log(file));

  const filepath = path(dir, 'text1.txt');

  const info = await stat(filepath);
  console.log(info.birthtime.toISOString());
  console.log(info.size());
  console.log(info.isDirectory());
} catch (err) {
  console.log(err);
}
