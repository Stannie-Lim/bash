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

/**
 * 
 * 1. put your code inside a function
 * 2. make a new file called cat.js
 * 3. require fs inside this file
 * 4. paste your function in here
 * 5. module.exports = { the function }
 * 
 */