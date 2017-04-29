const assert = require('assert');
const parse = require('../parser');

describe('Parser Test', () => {
  describe('simple program', () => {
    it('hello world program', () => {
      const ast = parse('burp("HelloWorld")').toString();
      const expected = '(Program  (Block (Print burp (StringLiteral "HelloWorld" ))))';
      assert.equal(ast, expected);
    });
  });
  describe('simple binexp', () => {
    it('binexp', () => {
      const ast = parse('1 + 1').toString();
      const expected = '(Program  (Block (BinaryExpression (FloatLiteral 1.0) + (FloatLiteral 1.0))))';
      assert.equal(ast, expected);
    });
  });
});
