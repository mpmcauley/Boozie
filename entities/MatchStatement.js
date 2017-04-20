const Statement = require('../entities/Statement.js');

class MatchStatement extends Statement {
  constructor(e1, e2) {
    super();
    this.e1 = e1;
    this.e2 = e2;
  }
  toString() {
    return (`(MatchStatement match ${this.e1} with ${this.e2})`);
  }
}

module.exports = MatchStatement;
