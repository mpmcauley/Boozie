const Expression = require('../entities/Expression');

class UnaryExpression extends Expression {
  constructor(op, e) {
    super();
    this.op = op;
    this.exp = e;
  }
  toString() {
    return (`${this.op} ${this.exp}`);
  }
}

UnaryExpression.prototype.analyze = (context) => {
  this.op.analyze(context);
  switch (this.op) {
      case 'not':
        this.exp.type.mustBeBoolean('The "not" operator requires a boolean operand', this.op);
        return this.type = Type.BOOL;
      case '-':
        this.exp.type.mustBeInteger('The "negation" operator requires an integer operand', this.op);
        return this.type = Type.INT;
  }
};

module.exports = UnaryExpression;
