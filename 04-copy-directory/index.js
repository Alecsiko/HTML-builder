
const path = require('path');
const fspromises = require('fs/promises');

const thePathToFile = path.join('04-copy-directory', 'files-copy');

async function copyDir() {
  const folder = await fs.mkdir(thePathToFile, { recursive: true });
  let files = await fs.readdir(thePathToFile, {withFileTypes: true});
 

};