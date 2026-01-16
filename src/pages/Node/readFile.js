//const fs = require('fs').promises;
import fs from 'node:fs/promises';
import path from 'path';

//read a file
async function readFileExample(testDir) {
  try {
    const data = await fs.readFile('test/test1.txt', 'utf8');
    console.log('File content:', data);
    const stats = await fs.stat('test/test1.txt');
    const size = stats.size;
    const createdAt = stats.birthtime.toISOString().split('T')[0]; //YYYY-MM-DD
    const isDirectry = stats.isDirectory();
    console.log(
      `size: ${size}, createdAt: ${createdAt}, isDirectry: ${isDirectry}`
    );
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileExample('test');

// fileName: fileName,
// filePath: filePath,
// size: stats.size,
// // Formatting UTC Date to YYYY-MM-DD
// createdAt: stats.birthtime.toISOString().split('T')[0],
// isDirectry: stats.isDirectory(),
