class BinaryExpression extends Expression {
  constructor(e1, op, e2) {
    super();
    this.e1 = e1;
    this.op = op;
    this.e2 = e2;
  }
  toString() {
    this.e1 + " " + this.op + " " + this.e2;
  }
}

module.exports = BinaryExpression;
