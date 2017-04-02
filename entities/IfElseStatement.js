const Statement = require('../entities/Statement.js');

class IfElseStatement extends Statement {
  constructor(condition, body, elseStmt) {
    super();
    this.condition = condition;
    this.body = body;
    this.else = elseStmt;
  }
  analyze(context) {
    this.condition.analyze(context);
    this.condition.type.mustBeBoolean('Condition in "if else" statement must be boolean');
    this.body.analyze(context);
    if (this.else) {
      return this.else.analyze(context);
    }
  }
  toString() {
    return (`if ${this.condition} { ${this.body} } else { ${this.else} }`);
  }
}

module.exports = IfElseStatement;
