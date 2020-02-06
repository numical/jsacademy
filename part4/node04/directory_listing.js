const fs = require('fs');

function print (arg) {
  console.log(arg);
}

function receiveFiles (err, files) {
  if (err) {
    print(err);
  } else {
    files.forEach(print);
  }
}

fs.readdir('/', receiveFiles);
