'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.setPrompt('> ');
rl.prompt();

//event listener
//every time a user inputs something
rl.on('line', reply => {
  console.log(`You said :: ${reply}`);
  rl.prompt();
});
