'use script';

const os = require('os');
const fs = require('fs');
console.log(os.endiannes());


//example
let buffer = Buffer.from('John');
console.log(buffer);
console.log(buffer.toString());

buffer[0] = 0x5A;
console.log(buffer);
// convert buffer back to a string
console.log(buffer.toString());

buffer[1] = 97;
console.log(buffer);
console.log(buffer.toString());

// iterate each char in the array of bytes. convert buffer back to a string
const stringify = (buffer) => {
  let str = '';
  for(let char of buffer) {
    str += String.fromCharCode(char);
  }
  return str;
};

console.log( stringify(buffer) );
// read the buffer and convert it to an integer
console.log( buffer.readInt16LE(0));
console.log( buffer.readInt16BE(3));

// write
fs.writeFile('./main.js', buffer, (err,data) => {
  if (err ) { throw err; }
  console.log(data);
});