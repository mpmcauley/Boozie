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
<<<<<<< HEAD
    return (`(ReturnStatement return ${this.body})`);
=======
    return (`return ${this.returnValue}`);
>>>>>>> master
  }
}

module.exports = ReturnStatement;
