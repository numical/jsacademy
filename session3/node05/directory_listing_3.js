const fs = require('fs');

fs.readdir('/', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => console.log(file));
  }
});
