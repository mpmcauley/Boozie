class Expression {
  constructor(e) {
    this.e = e;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Expression ${this.e})`);
  }
}
module.exports = Expression;
