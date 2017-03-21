const Statement = require('../entities/Statement.js');

class ReturnStatement extends Statement {
  constructor(body) {
    super();
    this.body = body;
  }
  toString() {
    return (`return ${this.body}`);
  }
}

ReturnStatement.prototype.analyze = (context) => {
  this.body.analyze(context);
};

module.exports = ReturnStatement;
