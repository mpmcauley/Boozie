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

module.exports = IfElseStatement;
