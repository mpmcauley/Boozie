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

module.exports = UnaryExpression;
