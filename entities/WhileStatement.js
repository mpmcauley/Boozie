const Statement = require('../entities/Statement.js');

class WhileStatement extends Statement {
  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }
  toString() {
    return (`while ${this.condition} { ${this.body} }`);
  }
}

WhileStatement.prototype.analyze = (context) => {
  this.condition.analyze(context);
  return this.body.analyze(context);
};

module.exports = WhileStatement;
