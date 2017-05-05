const Statement = require('../entities/Statement.js');

class ReturnStatement {
  constructor(returnValue) {
    // super();
    this.returnValue = returnValue;
  }
  analyze(context) {
    // if (context.inFunction) {
    //   throw new Error('Return statement not in function');
    // }
    if (this.returnValue) {
      this.returnValue.analyze(context);
    }
    context.assertIsFunction("Return statement outside of function");
    // this.body.analyze();
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
