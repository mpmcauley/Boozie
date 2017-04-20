// need to re-asses IF STATEMENTS

const Statement = require('../entities/Statement.js');

class ElseIfStatement extends Statement {
  constructor(condition, body, elseCond, elseIfStmt, elseStmt) {
    super();
    this.condition = condition;
    this.body = body;
    this.elseCond = elseCond;
    this.elseIf = elseIfStmt;
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
  toString() {
    return (`(ElseIfStatement if ${this.condition} { ${this.body} } else if ${this.elseCond} { ${this.elseIf} } else { ${this.else} })`);
  }
}

module.exports = ElseIfStatement;
