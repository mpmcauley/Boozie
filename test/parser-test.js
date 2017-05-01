const assert = require('assert');
const parse = require('../parser');

describe('Parser Test', () => {
  describe('simple program', () => {
    it('empty program', () => {
      const ast = parse('').toString();
      const expected = '(Program (Block ))';
      assert.equal(ast, expected);
    });
    it('hello world program', () => {
      const ast = parse('burp("HelloWorld")').toString();
      const expected = '(Program (Block (Print burp (StringLiteral "HelloWorld"))))';
      assert.equal(ast, expected);
    });
  });
  describe('binexp', () => {
    it('simple binexp', () => {
      const ast = parse('1 + 1').toString();
      const expected = '(Program (Block (BinaryExpression (FloatLiteral 1.0) + (FloatLiteral 1.0))))';
      assert.equal(ast, expected);
    });
    it('more complex binexp', () => {
      const ast = parse('(9 + 1) / (5*10)').toString();
      const expected = '(Program (Block (BinaryExpression (BinaryExpression (FloatLiteral 9.0) + (FloatLiteral 1.0)) / (BinaryExpression (FloatLiteral 5.0) * (FloatLiteral 10.0)))))';
      assert.equal(ast, expected);
    });
  });
  describe('VarDecl', () => {
      it('simple VarDecl', () => {
        const ast = parse('let x = 7').toString();
        const expected = '(Program (Block (VariableDecl ((IdExpression x) = (FloatLiteral 7.0))))';
        assert.equal(ast, expected);
      });
      it('multiple VarDecl', () => {
        const ast = parse('let x, y, z = 7, 8, 9').toString();
        const expected = '(Program (Block (VariableDecl ((IdExpression x) = (FloatLiteral 7.0)),((IdExpression y) = (FloatLiteral 8.0)),((IdExpression z) = (FloatLiteral 9.0))))';
        assert.equal(ast, expected);
      });
    });
    describe('ArrayDecl', () => {
      it('simple ArrayDecl', () => {
        const ast = parse('let x = [7]').toString();
        const expected = '(Program (Block (VariableDecl ((IdExpression x) = (BoozieArray (FloatLiteral 7.0)))))';
        assert.equal(ast, expected);
      });
// <<<<<<< HEAD
    });
  describe('if statement', () => {
    it('solo if statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") }').toString();
      const expected = '(Program (Block (IfStatement if (BinaryExpression (IdExpression x) == (IdExpression y)) { (Block (Print burp (StringLiteral "HelloWorld" ))) } )))';
      assert.equal(ast, expected);
    });
  });

  describe('return statement', () => {
    it('return statement', () => {
      const ast = parse('return 6').toString();
      const expected = '(Program (Block (ReturnStatement return (FloatLiteral 6.0))))';
      assert.equal(ast, expected);
    });
  });

  describe('if else statement', () => {
    it(' if else statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") } else { burp("Justin") }').toString();
      const expected = '-(Program  (Block (IfStatement if (BinaryExpression (IdExpression x) == (IdExpression y)) { (Block (Print burp (StringLiteral "HelloWorld" ))) } )))';
// =======
      it('another simple array', () => {
        const ast = parse('let x = [7, 8]').toString();
        const expected = '(Program (Block (VariableDecl ((IdExpression x) = (BoozieArray (FloatLiteral 7.0),(FloatLiteral 8.0)))))';
        assert.equal(ast, expected);
      });
      it('multiple ArrayDecl', () => {
        const ast = parse('let x, y = [7, 8], ["hey","you"]').toString();
        const expected = '(Program (Block (VariableDecl ((IdExpression x) = (BoozieArray (FloatLiteral 7.0),(FloatLiteral 8.0))),((IdExpression y) = (BoozieArray (StringLiteral "hey"),(StringLiteral "you")))))';
        assert.equal(ast, expected);
      });
    });
  describe('if statement', () => {
    it('solo if statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") }').toString();
      const expected = '(Program (Block (IfStatement if (BinaryExpression (IdExpression x) == (IdExpression y)) { (Block (Print burp (StringLiteral "HelloWorld"))) } )))';
      assert.equal(ast, expected);
    });
  });
  describe('if else statement', () => {
    it('simple if else statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") } else { burp("Justin") }').toString();
      const expected = '(Program (Block (IfElseStatement if (BinaryExpression (IdExpression x) == (IdExpression y)) { (Block (Print burp (StringLiteral "HelloWorld"))) } else { (Block (Print burp (StringLiteral "Justin"))) })))';
      assert.equal(ast, expected);
    });
  });

  describe('return statement', () => {
    it('return statement', () => {
      const ast = parse('return 6').toString();
      const expected = '(Program (Block (ReturnStatement return (FloatLiteral 6.0))))';
// >>>>>>> a36ffaac9cb7d747952f5456998e814fa8c818be
      assert.equal(ast, expected);
    });
  });

  describe('for statement', () => {
    it('for statement', () => {
      const ast = parse('for beer in beers { burp("Khiem likes ping pong") }').toString();
// <<<<<<< HEAD
      const expected = '(Program (Block (ForStatement for (IdExpression beer) in (IdExpression beers) { (Block (Print burp (StringLiteral "Khiem likes ping pong" ))) } )))';
      assert.equal(ast, expected);
    });
  });

  describe('While loop', () => {
    it('simple while', () => {
      const ast = parse('while x == 5 { let y = 1 }').toString();
      const expected = '(Program (Block (WhileStatement (BinaryExpression (IdExpression x) == (FloatLiteral 5.0)) { (Block (VariableDecl ((IdExpression y) = (FloatLiteral 1.0))) })))';
      assert.equal(ast, expected);
    });
    it(' boolean while statement', () => {
      const ast = parse('while true { if x == 5.0 { burp("HelloWorld") } }').toString();
      const expected = '(Program (Block (WhileStatement (BooleanLiteral true) { (Block (IfStatement if (BinaryExpression (IdExpression x) == (FloatLiteral 5.0.0)) { (Block (Print burp (StringLiteral "HelloWorld" ))) } )) })))';
// =======
      assert.equal(ast, expected);
    });
  });

  describe('While loop', () => {
    it('simple while', () => {
      const ast = parse('while x == 5 { let y = 1 }').toString();
      const expected = '(Program (Block (WhileStatement (BinaryExpression (IdExpression x) == (FloatLiteral 5.0)) { (Block (VariableDecl ((IdExpression y) = (FloatLiteral 1.0))) })))';
      assert.equal(ast, expected);
    });
    it('boolean while statement', () => {
      const ast = parse('while true { if x == 5.0 { burp("HelloWorld") } }').toString();
      const expected = '(Program (Block (WhileStatement (BooleanLiteral true) { (Block (IfStatement if (BinaryExpression (IdExpression x) == (FloatLiteral 5.0.0)) { (Block (Print burp (StringLiteral "HelloWorld"))) } )) })))';
// >>>>>>> a36ffaac9cb7d747952f5456998e814fa8c818be
      assert.equal(ast, expected);
    });
  });

// <<<<<<< HEAD
  describe('Constant Declaration', () => {
    it('single constant decl', () => {
      const ast = parse('set x = 5').toString();
      const expected = '(Program (Block (ConstDecl ((IdExpression x) = (FloatLiteral 5.0))))';
      assert.equal(ast, expected);
    });
    it('multiple constants decl', () => {
      const ast = parse('set x,y = 5,6').toString();
      const expected = '(Program (Block (ConstDecl ((IdExpression x) = (FloatLiteral 5.0) (IdExpression y) = (FloatLiteral 6.0)))))'
    })
  });

  describe('Function Declaration', () => {
    it('simple function declaration', () => {
      const ast = parse('let someFunc = x = { burp(x) }').toString();
      const expected = '(Program (Block (FunDecl)))';
      assert.equal(ast, expected);
    });
  });

// =======

  describe('ConstDecl', () => {
      it('simple ConstDecl', () => {
        const ast = parse('set x = 5').toString();
        const expected = '(Program (Block (ConstDecl ((IdExpression x) = (FloatLiteral 5.0))))';
        assert.equal(ast, expected);
      });
      it('multiple constants decl', () => {
      const ast = parse('set x,y = 5,6').toString();
      const expected = '(Program (Block (ConstDecl ((IdExpression x) = (FloatLiteral 5.0) (IdExpression y) = (FloatLiteral 6.0)))))'
      })
    });
    describe('Drunken ConstDecl', () => {
        it('types do not matter in declaration', () => {
          const ast = parse('set beer, yup, fuzz = ["hi",[1,2],"you"], 15, "hey"').toString();
          const expected = '(Program (Block (ConstDecl ((IdExpression beer) = (BoozieArray (StringLiteral "hi"),(BoozieArray (FloatLiteral 1.0),(FloatLiteral 2.0)),(StringLiteral "you"))),((IdExpression yup) = (FloatLiteral 15.0)),((IdExpression fuzz) = (StringLiteral "hey"))))';
          assert.equal(ast, expected);
        });
      });
// >>>>>>> a36ffaac9cb7d747952f5456998e814fa8c818be

});
