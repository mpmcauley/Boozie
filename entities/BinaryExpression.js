const Expression = require('../entities/Expression.js');
const Type = require('../entities/Type.js');

class BinaryExpression extends Expression {
  constructor(e1, op, e2) {
    super();
    this.e1 = e1;
    this.op = op;
    this.e2 = e2;
    Object.assign(this, { e1, op, e2 });
  }
  analyze(context) {
    this.e1.analyze(context);
    this.e2.analyze(context);
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
    return this;
  }
  toString() {
    return (`(BinaryExpression ${this.e1} ${this.op} ${this.e2})`);
  }
}

module.exports = BinaryExpression;
