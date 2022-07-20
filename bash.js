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
