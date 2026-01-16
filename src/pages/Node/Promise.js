import { readFile } from 'node:fs/promises';

async function readMyFile() {
  try {
    const data = await readFile('path/to/file.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readMyFile();




//async/await



//Chained Promises

fetch(url).then().then().catch().finally()


myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });