const ls = require('./ls');
const cat = require('./cat');

// 1. stdout prints something to console
// 2. stdin asks user to type something

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const [command, file] = data.toString().trim().split(' ');

  /*
  const someArray = ['hello', 'bye'];
  const [first, second] = someArray;
  console.log(first); // 'hello'
  console.log(second); // 'bye'
  */

  if (command === 'ls') {
    ls.readDirectory();
  } else if (command === 'cat') {
    cat.readFile(file);
  } else if (command === 'pwd') {
    console.log(__dirname);
    process.stdout.write('\nprompt > ');
  }
});

/**
 * 
 * what does 'ls' do?
 *  it just reads your current directory
 * 
 * what does 'cat' do?
 *  it just reads a file
 * 
 * 
 */

/**
 * steps to separate your code into different files
 * 1. put your code inside a function
 * 2. make a new file called cat.js
 * 3. require fs inside this file
 * 4. paste your function in here
 * 5. module.exports = { the function }
 * 
 */

/**
 * steps to delete node_modules from your repo
 * 1. make a new file called .gitignore
 * 2. put node_modules in there 
 * 3. rm -rf node_modules
 * 4. git add . && git commit -m "removed node_modules" && git push
 * 
 */