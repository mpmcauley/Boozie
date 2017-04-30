const assert = require('assert');
const parse = require('../parser');

describe('Parser Test', () => {
  describe('simple program', () => {
    it('hello world program', () => {
      const ast = parse('burp("HelloWorld")').toString();
      const expected = '(Program  (Block (Statement (Print burp (StringLiteral "HelloWorld" )))))';
      assert.equal(ast, expected);
    });
  });
  describe('simple binexp', () => {
    it('binexp', () => {
      const ast = parse('1 + 1').toString();
      const expected = '(Program  (Block (Statement (BinaryExpression (FloatLiteral 1.0) + (FloatLiteral 1.0)))))';
      assert.equal(ast, expected);
    });
  });
  describe('if statement', () => {
    it('if statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") }').toString();
      const expected = '(Program  (Block (IfStatement if (BinaryExpression (IdExpression x) == (IdExpression y)) { (Block (Print burp (StringLiteral "HelloWorld" ))) } )))';
      assert.equal(ast, expected);
    });
  });
  describe('return statement', () => {
    it('return statement', () => {
      const ast = parse('return 6').toString();
      const expected = '(Program  (Block (ReturnStatement return (FloatLiteral 6.0))))';
      assert.equal(ast, expected);
    });
  });
  describe('for statement', () => {
    it('for statement', () => {
      const ast = parse('for beer in beers { burp("Khiem likes ping pong") }').toString();
      const expected = '(Program  (Block (ForStatement for (IdExpression beer) in (IdExpression beers) { (Block (Print burp (StringLiteral "Khiem likes ping pong" ))) } )))';
      assert.equal(ast, expected);
    });
  });
  describe('if else statement', () => {
    it(' if else statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") } else { burp("Justin") }').toString();
      const expected = '(Program  (Block (IfElseStatement if (BinaryExpression (IdExpression x) == (IdExpression y)) { (Block (Print burp (StringLiteral "HelloWorld" ))) } else { (Block (Print burp (StringLiteral "Justin" ))) })))';
      assert.equal(ast, expected);
    });
  });
});