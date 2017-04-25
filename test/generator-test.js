const assert = require('assert');
const parse = require('../parser');
const analyze = require('../analyzer');
const gen = require('../backend/javascript-generator');

describe('Code Generator Test', () => {
  describe('simple programs', () => {
    it('hello world program', () => {
      const compile = gen('burp("HelloWorld")');
      const expected = 'console.log("HelloWorld");';
      assert.equal(ast, expected);
    });
  });
  describe('assignment statements', () => {
    it('simple variable declaration', () => {
      const compile = gen('let beer = "beer"');
      const expected = 'let beer = "beer";';
      assert.equal(ast, expected);
    });
    it('simple constant declaration', () => {
      const compile = gen('set beer = "beer"');
      const expected = 'const beer = "beer";';
      assert.equal(ast, expected);
    });
    it('array variable declaration', () => {
      const compile = gen('let beers = ["Blue Moon", "Shock Top"]');
      const expected = 'let beers = ["Blue Moon", "Shock Top"];';
      assert.equal(ast, expected);
    });
    it('array constant declaration', () => {
      const compile = gen('set beers = ["Blue Moon", "Shock Top"]');
      const expected = 'const beers = ["Blue Moon", "Shock Top"];';
      assert.equal(ast, expected);
    });
  });
});
