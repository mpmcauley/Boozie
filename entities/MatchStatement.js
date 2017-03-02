class MatchStatement extends Statement {
  constructor(e1, e2) {
    this.e1 = e1;
    this.e2 = e2;
  }
  toString() {
    "match " + this.e1 + " with " + this.e2;
  }
}

module.exports = MatchStatement;
