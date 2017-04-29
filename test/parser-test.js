const assert = require('assert');
const parse = require('../parser');

describe('Parser Test', () => {
  describe('simple program', () => {
    it('hello world program', () => {
      const ast = parse('burp("HelloWorld")').toString();
      const expected = 'Program (Block (Statement ({HelloWorld: string} (print "HelloWorld"))))';
      assert.equal(ast, expected);
    });
  });
});
