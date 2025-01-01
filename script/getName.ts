import * as fs from 'fs';
import * as path from 'path';

// Get the current directory name
const folderName = path.basename(process.cwd());

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Modify the name field with the folder name
packageJson.name = folderName;

// Write the updated package.json back to the file
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`Package name updated to ${folderName}`);
