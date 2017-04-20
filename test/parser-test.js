const assert = require('assert');
const parse = require('../parser');

describe('Parser Test', () => {
  describe('simple program', () => {
    it('hello world program', () => {
      const ast = parse('burp ("HelloWorld")').toString();
      const expected = '(Program  (Block (Statement (Print ("burp(HelloWorld)"))))))';
      assert.equal(ast, expected);
    });
  });
  describe('var decl', () => {
    it('var decl', () => {
      const ast = parse('let x = 5').toString();
      const expected = '(Program  (Block (Statement (VarDecl("let x = 5")))))))';
      assert.equal(ast, expected);
    });
  });
});
