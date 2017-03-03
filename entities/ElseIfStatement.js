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
  toString() {
    return (`if ${this.condition} { ${this.body} } else if ${this.elseCond} { ${this.elseIf} } else { ${this.else} }`);
  }
}

module.exports = ElseIfStatement;
