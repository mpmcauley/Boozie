const Statement = require('../entities/Statement.js');

class AssignmentStatement extends Statement {
  constructor(left, op, right) {
    super();
    this.left = left;
    this.op = op;
    this.right = right;
  }

  analyze(context) {
    this.left.analyze(context);
    this.left.analyze(context);
  }

  optimize() {
    this.left = this.left.optimize();
    this.right = this.right.optimize();
    return this;
  }
  toString() {
    return (`(AssignmentStatement ${this.e1} ${this.op} ${this.e2})`);
  }
}

module.exports = AssignmentStatement;
