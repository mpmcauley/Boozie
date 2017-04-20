class Expression {
  constructor(e) {
    this.e = e;
  }
  toString() {
    return (`(Expression ${this.e})`);
  }
}
module.exports = Expression;
