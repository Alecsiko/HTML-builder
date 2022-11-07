
const fs = require('fs');
const path = require('path');

const thePathToFile = path.join('01-read-file', 'text.txt');
const stream = new fs.createReadStream(thePathToFile);

stream.pipe(process.stdout);

