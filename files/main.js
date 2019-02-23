'use strict';

const fs = require('fs');



const manipulationData = function() {

  const loopFunctionString = `['Larry','Moe','Curly'].forEach( stooge => console.log(stooge));`;
  const loopFunctionStringLength = loopFunctionString.length;
  const buffer = Buffer.allocUnsafe(loopFunctionStringLength);

  for (let i = 0; i <= loopFunctionStringLength; i++) {
    buffer.fill(loopFunctionString);
  }
  return buffer;
};
//write to loop.js file
fs.writeFile('files/loop.js', manipulationData(), (err) => {
  if (err) {
    throw err;
  }
});

module.exports = manipulationData;