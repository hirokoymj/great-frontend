const fs = require('fs').promises;
const path = require('path');

/**
 * Main function to scan a directory and return file metadata
 * @param {string} testDir - The directory path to scan
 */
const main = async (testDir) => {
  try {
    // 1. Get all file/folder names in the directory
    const files = await fs.readdir(testDir);

    // 2. Map filenames to Promises that fetch their metadata
    const fileDataPromises = files.map(async (fileName) => {
      const filePath = path.join(testDir, fileName);
      const stats = await fs.stat(filePath);

      return {
        fileName: fileName,
        filePath: filePath,
        size: stats.size,
        // Formatting UTC Date to YYYY-MM-DD
        createdAt: stats.birthtime.toISOString().split('T')[0],
        isDirectry: stats.isDirectory(),
      };
    });

    // 3. Resolve all promises concurrently
    const result = await Promise.all(fileDataPromises);

    // 4. Print the result
    console.log(JSON.stringify(result, null, 2));

    return result;
  } catch (error) {
    console.error('Error reading directory:', error.message);
  }
};

main('./test');

