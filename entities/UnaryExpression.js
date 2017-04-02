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
  return this.type = Type.
  }
};

module.exports = UnaryExpression;
