const fs = require('fs');

// get all of the files and folders in your current directory
// we need fs.readdir here
// fs.readdir takes in 3 arguments
// 1. path
// 2. callback. this is where you get the error or your data

// this is asyncronous!
// simple 1 line definition of asyncronous: code takes time to run
// another thing about async code is that there can be errors
// you dont know how long it'll take to finish, or if it will finish at all

const readDirectory = () => {
  fs.readdir(__dirname, (error, files) => {
    if (error) {
      console.log('hi there is an error pls fix your code');
    } else {
      console.log(files.join('\n'));
    }
    process.stdout.write('\nprompt > ');
  });
};

module.exports = {
  readDirectory,
};