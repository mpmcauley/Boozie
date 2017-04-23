const assert = require('assert');
const parse = require('../parser');
const analyze = require('../analyzer');
const gen = require('../backend/javascript-generator');

describe('Code Generator Test', () => {
  describe('simple program', () => {
    it('hello world program', () => {
      const compile = gen('burp("HelloWorld")');
      const expected = 'console.log("HelloWorld");';
      assert.equal(ast, expected);
    });
  });
});
