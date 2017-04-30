// need to re-asses IF STATEMENTS

const Statement = require('../entities/Statement.js');

class IfElseIfStatement extends Statement {
  constructor(condition, body, elseCond, elseStmt) {
    super();
    this.condition = condition;
    this.body = body;
    this.elseCond = elseCond;
    this.else = elseStmt;
  }
  analyze(context) {
    this.condition.analyze(context);
    this.condition.type.mustBeBoolean('Condition in "else if" statement must be boolean');
    this.body.analyze(context);
    if (this.elseIf) {
      return this.elseIf.analyze(context);
    }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(IfElseIfStatement if ${this.condition} { ${this.body} } else if ${this.elseCond} { ${this.else} } )`);
  }
}

module.exports = IfElseIfStatement;
