const path = require('path');
const fspromises = require('fs/promises');

const thePathToFile = path.join('03-files-in-folder', 'secret-folder');

async function filesInFolder() {
  const files = await fspromises.readdir((thePathToFile), { withFileTypes: true });

  for (let file of files) {
    if (file.isFile()) {
      const filePath =  path.join(thePathToFile, file.name);
      const fileName = path.parse(filePath).name;
      const fileExt = path.extname(filePath).slice(1);
      const fileSize = (await fspromises.stat(filePath)).size;

      console.log(`${fileName} - ${fileExt} - ${fileSize/1000}kb`)
    }
  }
};

filesInFolder();