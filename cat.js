const fs = require('fs');

const readFile = (file) => {
  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      console.log('hi there is something wrong with your code');
    } else {
      console.log(data);
    };
    process.stdout.write('\nprompt > ');
  });
}

module.exports = {
  readFile,
};
