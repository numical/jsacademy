const fs = require('fs');

const print = (arg) => {
  console.log(arg);
};

const receiveFiles = (err, files) => {
  if (err) {
    print(err);
  } else {
    files.forEach(print);
  }
};

fs.readdir('/', receiveFiles);
