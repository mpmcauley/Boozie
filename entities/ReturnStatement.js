const Statement = require('../entities/Statement.js');

class ReturnStatement extends Statement {
  constructor(returnValue) {
    super();
    this.returnValue = returnValue;
  }
  analyze(context) {
    if (context.inFunction) {
      throw new Error('Return statement not in function');
    }
    // this.body.analyze();
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(ReturnStatement return ${this.returnValue})`);
  }
}

module.exports = ReturnStatement;
