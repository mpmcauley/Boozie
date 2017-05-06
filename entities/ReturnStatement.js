const Statement = require('../entities/Statement.js');

class ReturnStatement {
  constructor(returnValue) {
    // super();
    this.returnValue = returnValue;
  }
  analyze(context) {
    if (this.returnValue) {
      this.returnValue.analyze(context);
    }
    context.assertIsFunction("Return statement outside of function");
  }
  optimize() {
    if (this.returnValue) {
      this.returnValue = this.returnValue.optimize();
    }
    return this;
  }
  toString() {
    return (`(ReturnStatement return ${this.returnValue})`);
  }
}

module.exports = ReturnStatement;
