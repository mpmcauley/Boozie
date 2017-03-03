class MatchStatement extends Statement {
  constructor(e1, e2) {
    super();
    this.e1 = e1;
    this.e2 = e2;
  }
  toString() {
    return (`match ${this.e1} with ${this.e2}`);
  }
}

module.exports = MatchStatement;
