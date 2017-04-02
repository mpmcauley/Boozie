const Statement = require('../entities/Statement.js');

class IfStatement extends Statement {
  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }
  analyze(context) {
    this.condition.analyze(context);
    this.condition.type.mustBeBoolean('Condition in "else if" statement must be boolean');
    this.body.analyze(context);
    // if (this.elseIf) {
    //   return this.elseIf.analyze(context);
    // }
  }
  toString() {
    return (`if ${this.condition} { + ${this.body} } `);
  }
}

module.exports = IfStatement;
