'use strict';

const fs = require('fs');

const loopFunctionString = `['Larry','Moe','Curly'].forEach( stooge => console.log(stooge));`;

const loopFunctionStringLength = loopFunctionString.length;

const buffer = Buffer.allocUnsafe(loopFunctionStringLength);

for (let i = 0; i <= loopFunctionStringLength; i++) {
  buffer.fill(loopFunctionString);
}

fs.writeFile('files/loop.js', buffer, (err) => {
  if (err) {
    throw err;
  }
  console.log('filesaved');
});