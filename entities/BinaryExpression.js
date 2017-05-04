const Expression = require('../entities/Expression.js');
// const Type = require('../entities/Type.js');

class BinaryExpression extends Expression {
  constructor(left, op, right) {
    super();
    this.left = left;
    this.op = op;
    this.right = right;
    Object.assign(this, { left, op, right });
    // console.log(this.left, this.right);
  }
  analyze(context) {
    // console.log(this.left);
    // console.log(context);
    // console.log(this.left);
    this.left.analyze(context);
    this.right.analyze(context);
    // this.e1.analyze(context);
    // this.e2.analyze(context);
    // const op = this.op;
    // switch (op) {
    //   case '<':
    //   case '<=':
    //   case '>=':
    //   case '>':
    //     this.mustHaveFloatOperands();
    //     this.mustHaveNumberOperands();
    //     return this.type = Type.BOOL;
    //   case '==':
    //   case '!=':
    //     this.mustHaveCompatibleOperands();
    //     return this.type = Type.BOOL;
    //   case 'and':
    //   case 'or':
    //     this.mustHaveBooleanOperands();
    //     return this.type = Type.BOOL;
    //   default:
    //     this.mustHaveFloatOperands();
    //     return this.type = Type.FLOAT;
    // }
  }
  // mustHaveFloatOperands() {
  //   let error = this.op + " must have integer operands";
  //   this.e1.type.mustBeCompatibleWith(Type.FLOAT, error, this.op);
  //   return this.e2.type.mustBeCompatibleWith(Type.FLOAT, error, this.op);
  // }
  //
  // mustHaveBooleanOperands() {
  //   let error = this.op + " must have boolean operands";
  //   this.e1.type.mustBeCompatibleWith(Type.BOOL, error, this.op);
  //   return this.e2.type.mustBeCompatibleWith(Type.BOOL, error, this.op);
  // }
  //
  // mustHaveCompatibleOperands() {
  //   let error = this.op + " must have mutually compatible operands";
  //   return this.e1.type.mustBeMutuallyCompatibleWith(this.e2.type, error, this.op);
  // }
  optimize() {
    this.left = this.left.optimize();
    this.right = this.right.optimize();
    return this;
  }
  toString() {
    return (`(BinaryExpression ${this.left} ${this.op} ${this.right})`);
  }
}

module.exports = BinaryExpression;
