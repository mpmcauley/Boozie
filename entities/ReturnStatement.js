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
  toString() {
    return (`return ${this.body}`);
  }
}

module.exports = ReturnStatement;
