'use strict';

const dataManipulation = require('../files/main.js');

describe('dataManipulation from main.js', () => {
  test('Testing the dataManipulation function toString returns a forEach function,', () => {
    expect(dataManipulation().toString()).toEqual(`['Larry','Moe','Curly'].forEach( stooge => console.log(stooge));`);
  });
});