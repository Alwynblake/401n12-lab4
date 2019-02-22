'use script';

const os = require('os');
console.log(os.endiannes());


//let arr = ['Larry', 'Moe', 'Curly'];
//for ( let )
let buffer = Buffer.from ('Larry');
console.log (buffer);

let stringifyBuffer = buffer => {
  let str = ' ';
  //run a for loop for each character in the string of bytes
  for ( let char of buffer ) {
    str += String.fromCharCode(char);
  }
  return str;
};
// read the buffer and convert it to an integer
console.log (buffer.readInt32LE(1));

