import { readdir } from 'fs/promises';

const dir = 'test';

try {
  const files = await readdir(dir);
  files.forEach((file) => console.log(file));
} catch (err) {
  console.error('Error:', err);
}
