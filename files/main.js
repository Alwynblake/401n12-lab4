'use script';

const fs = require('fs');

let buffer = Buffer.from('Larry Moe Curly');
console.log(buffer)
// write
fs.writeFile('files/loop.js', buffer, (err) => {
  if (err ) { throw err; }
  console.log('savedfile');
});