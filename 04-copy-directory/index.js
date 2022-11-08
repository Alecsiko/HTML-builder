const fs = require('fs');
const path = require('path');

const thePathToFile = path.join('04-copy-directory', 'files');
const thePathToCopyFile = path.join('04-copy-directory', 'files-copy');

(function copyDir() {
  fs.mkdir(thePathToCopyFile, () => { });

  fs.readdir(thePathToCopyFile, (err, data) => {
    data.forEach((element) => {
      const newFile = path.join('04-copy-directory', 'files-copy', element.toString());
      fs.unlink(newFile, () => { })
    })
    copyFiles();
  });
}());

function copyFiles() {
  fs.readdir(thePathToFile, (err, data) => {
    data.forEach((element) => {
      fs.copyFile(path.join('04-copy-directory', 'files', element), path.join('04-copy-directory', 'files-copy', element), () => { });
    })
  });
};
