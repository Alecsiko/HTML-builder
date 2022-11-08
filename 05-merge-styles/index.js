const fs = require('fs');
const path = require('path');

const thePathToFile = path.join('05-merge-styles', 'styles');
const newCssFile = path.join('05-merge-styles', './project-dist/bundle.css');

fs.readdir(thePathToFile, (err, data) => {
  if (err) {
    console.error(err);
  }

  fs.unlink(newCssFile, () => { })

  data.forEach((element) => {


    if (err) {
      console.error(err);
    }
    if (path.extname(element) === '.css') {
      fs.readFile(path.join('05-merge-styles', 'styles', element), (err, data) => {
        if (err) {
          console.error(err);
        }

        fs.appendFile(newCssFile, data, (err) => {
          if (err) {
            console.error(err);
          }
        });

      });
    };

  });
});