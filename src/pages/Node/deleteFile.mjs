import { unlink } from 'fs/promises';
import path from 'path';

console.log('=== Delete a file ===');
const dir = 'test';
const fileName = 'test1.txt';
const filePath = path.join(dir, fileName);

try {
  await unlink(filePath);
  console.log(`Deleted: ${filePath}`);
} catch (err) {
  console.error('Error deleting file:', err);
}
