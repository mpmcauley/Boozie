const Statement = require('../entities/Statement.js');

class MatchPattern extends Statement {
  constructor(p1, p2) {
    super();
    this.p1 = p1;
    this.p2 = p2;
  }
  toString() {
    return (`(MatchPattern >>  ${this.p1} :: ${this.p2})`);
  }
}

module.exports = MatchPattern;
