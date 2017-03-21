const Statement = require('../entities/Statement.js');

class IfElseStatement extends Statement {
  constructor(condition, body, elseStmt) {
    super();
    this.condition = condition;
    this.body = body;
    this.else = elseStmt;
  }
  toString() {
    return (`if ${this.condition} { ${this.body} } else { ${this.else} }`);
  }
}

IfElseStatement.prototype.analyze = (context) => {
  let booleanCondition;
  this.condition.analyze(context);
  booleanCondition = 'Condition in "if" statement must be boolean';
  this.condition.type.mustBeBoolean(booleanCondition);
  if (this.condition) {
    return this.body.analyze(context);
  } else {
    return this.elseStmt.analyze(context);
  }
};

module.exports = IfElseStatement;
