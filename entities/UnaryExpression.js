class UnaryExpression extends Expression {
  constructor(op, e) {
    super();
    this.op = op;
    this.exp = e;
  }
  toString() {
    this.op + " " + this.exp;
  }
}

module.exports = UnaryExpression;
