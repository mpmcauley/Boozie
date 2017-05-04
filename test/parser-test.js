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
      const expected = '(Program (Block (Print (StringLiteral "HelloWorld"))))';
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
        const expected = '(Program (Block (VariableDecl (Variable x = (FloatLiteral 7.0))))';
        assert.equal(ast, expected);
      });
      it('multiple VarDecl', () => {
        const ast = parse('let x, y, z = 7, 8, 9').toString();
        const expected = '(Program (Block (VariableDecl (Variable x = (FloatLiteral 7.0)),(Variable y = (FloatLiteral 8.0)),(Variable z = (FloatLiteral 9.0))))';
        assert.equal(ast, expected);
      });
    });
    describe('ArrayDecl', () => {
      it('simple ArrayDecl', () => {
        const ast = parse('let x = [7]').toString();
        const expected = '(Program (Block (VariableDecl (Variable x = (BoozieArray (FloatLiteral 7.0)))))';
        assert.equal(ast, expected);
      });
      it('another simple array', () => {
        const ast = parse('let x = [7, 8]').toString();
        const expected = '(Program (Block (VariableDecl (Variable x = (BoozieArray (FloatLiteral 7.0),(FloatLiteral 8.0)))))';
        assert.equal(ast, expected);
      });
      it('multiple ArrayDecl', () => {
        const ast = parse('let x, y = [7, 8], ["hey","you"]').toString();
        const expected = '(Program (Block (VariableDecl (Variable x = (BoozieArray (FloatLiteral 7.0),(FloatLiteral 8.0))),(Variable y = (BoozieArray (StringLiteral "hey"),(StringLiteral "you")))))';
        assert.equal(ast, expected);
      });
    });
  describe('if statement', () => {
    it('solo if statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") }').toString();
      const expected = '(Program (Block (IfStatement if (BinaryExpression x == y) { (Block (Print (StringLiteral "HelloWorld"))) } )))';
      assert.equal(ast, expected);
    });
  });
  describe('if else statement', () => {
    it('simple if else statement', () => {
      const ast = parse('if x == y { burp("HelloWorld") } else { burp("Justin") }').toString();
      const expected = '(Program (Block (IfElseStatement if (BinaryExpression x == y) { (Block (Print (StringLiteral "HelloWorld"))) } else { (Block (Print (StringLiteral "Justin"))) })))';
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

  describe('for statement', () => {
    it('for statement', () => {
      const ast = parse('for beer in beers { burp("Khiem likes ping pong") }').toString();
      const expected = '(Program (Block (ForStatement for beer in beers { (Block (Print (StringLiteral "Khiem likes ping pong"))) } )))';
      assert.equal(ast, expected);
    });
  });

  describe('While loop', () => {
    it('simple while', () => {
      const ast = parse('while x == 5 { let y = 1 }').toString();
      const expected = '(Program (Block (WhileStatement (BinaryExpression x == (FloatLiteral 5.0)) { (Block (VariableDecl (Variable y = (FloatLiteral 1.0))) })))';
      assert.equal(ast, expected);
    });
    it('boolean while statement', () => {
      const ast = parse('while true { if x == 5.0 { burp("HelloWorld") } }').toString();
      const expected = '(Program (Block (WhileStatement (BooleanLiteral true) { (Block (IfStatement if (BinaryExpression x == (FloatLiteral 5.0.0)) { (Block (Print (StringLiteral "HelloWorld"))) } )) })))';
      assert.equal(ast, expected);
    });
  });


  describe('ConstDecl', () => {
    it('simple ConstDecl', () => {
      const ast = parse('set x = 5').toString();
      const expected = '(Program (Block (ConstDecl (Variable x = (FloatLiteral 5.0))))';
      assert.equal(ast, expected);
    });
    it('multiple constants decl', () => {
      const ast = parse('set x,y = 5,6').toString();
      const expected = '(Program (Block (ConstDecl (Variable x = (FloatLiteral 5.0)),(Variable y = (FloatLiteral 6.0))))';
      assert.equal(ast, expected);
    });
  });
  describe('Drunken ConstDecl', () => {
    it('types do not matter in declaration', () => {
      const ast = parse('set beer, yup, fuzz = ["hi",[1,2],"you"], 15, "hey"').toString();
      const expected = '(Program (Block (ConstDecl (Variable beer = (BoozieArray (StringLiteral "hi"),(BoozieArray (FloatLiteral 1.0),(FloatLiteral 2.0)),(StringLiteral "you"))),(Variable yup = (FloatLiteral 15.0)),(Variable fuzz = (StringLiteral "hey"))))';
      assert.equal(ast, expected);
    });
  });
  describe('FuncDecl/Call', () => {
    it('simple function', () => {
      const ast = parse('let x = () => { burp("hey") }').toString();
      const expected = '(Program (Block (FuncDecl x = (Parameters ) => (Block (Print (StringLiteral "hey"))))))';
      assert.equal(ast, expected);
    });
    it('multiple params', () => {
      const ast = parse('let x = (dog, cat) => { burp(dog) }').toString();
      const expected = '(Program (Block (FuncDecl x = (Parameters dog,cat) => (Block (Print dog)))))';
      assert.equal(ast, expected);
    });
    it('Const FuncDecl', () => {
      const ast = parse('set x = (dog, cat, jim) => { let x = 45 }').toString();
      const expected = '(Program (Block (ConstFuncDecl x = (Parameters dog,cat,jim) => (Block (VariableDecl (Variable x = (FloatLiteral 45.0))))))';
      assert.equal(ast, expected);
    });
    it('simple func call no param', () => {
      const ast = parse('fun()').toString();
      const expected = '(Program (Block (FunctionCall fun ())))';
      assert.equal(ast, expected);
    });
    it('funCall array no params', () => {
      const ast = parse('fun[4]()').toString();
      const expected = '(Program (Block (FunctionCall (fun [(FloatLiteral 4.0)]) ())))';
      assert.equal(ast, expected);
    });
    it('funCall array one params', () => {
      const ast = parse('fun[4](yup)').toString();
      const expected = '(Program (Block (FunctionCall (fun [(FloatLiteral 4.0)]) (yup))))';
      assert.equal(ast, expected);
    });
  });
});
