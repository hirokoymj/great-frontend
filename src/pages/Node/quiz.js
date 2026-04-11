import { readdir, stat } from 'fs/promises';
import path from 'path';

const dir = 'test';
try {
  const files = await readdir(dir);
  await Promise.all(
    files.map(async (file) => {
      const filepath = path.join(dir, file);
      const info = await stat(filepath);
      console.log(`${filepath}`);
      console.log(`${info.size}`);
      console.log(`${info.birthtime.toISOString()}`);
      console.log(`===`);
    }),
  );
} catch (e) {}
