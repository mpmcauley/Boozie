const Statement = require('../entities/Statement.js');
const error = require('../error.js');

class ReturnStatement extends Statement {
  constructor(returnValue) {
    super();
    this.returnValue = returnValue;
  }
  analyze(context) {
    if (context.inFunction) {
      error('Return statement not in function');
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
