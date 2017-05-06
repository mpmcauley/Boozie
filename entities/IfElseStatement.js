const Statement = require('../entities/Statement.js');

class IfElseStatement extends Statement {
  constructor(condition, body, elseStmt) {
    super();
    this.condition = condition;
    this.body = body;
    this.elseStmt = elseStmt;
  }
  analyze(context) {
    console.log("pre condition analyzed");
    this.condition.analyze(context);
    console.log('condition analyzed');
    // this.condition.type.mustBeBoolean('Condition in "if else" statement must be boolean');
    this.body.analyze(context);
    if (this.elseStmt) {
      return this.elseStmt.analyze(context);
    }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(IfElseStatement if ${this.condition} { ${this.body} } else { ${this.elseStmt} })`);
  }
}

module.exports = IfElseStatement;
