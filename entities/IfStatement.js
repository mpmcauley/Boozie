const Statement = require('../entities/Statement.js');

class IfStatement extends Statement {
  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }
  toString() {
    return (`if ${this.condition} { + ${this.body} } `);
  }
}

IfStatement.prototype.analyze = (context) => {
  this.condition.analyze(context);
  const booleanCondition = 'Condition in "if" statement must be boolean';
  this.condition.type.mustBeBoolean(booleanCondition);
  this.body.analyze(context);
};

module.exports = IfStatement;
