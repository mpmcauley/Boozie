const Expression = require('../entities/Expression');

class UnaryExpression extends Expression {
  constructor(op, e) {
    super();
    this.op = op;
    this.exp = e;
  }
  analyze(context) {
    this.op.analyze(context);
    this.op.type.mustBeBoolean('Must be boolean', this.op);
    return this.type = Type.BOOL;
  }
  toString() {
    return (`${this.op} ${this.exp}`);
  }
}

module.exports = UnaryExpression;
