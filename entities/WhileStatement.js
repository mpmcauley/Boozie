const Statement = require('../entities/Statement.js');

class WhileStatement extends Statement {
  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }
  analyze(context) {
    this.condition.analyze(context);
    this.condition.type.mustBeBoolean('Condition in while statement');
    // if (this.condition.type !== Type.BOOL) {
    //   error('While condition must be boolean');
    // }
    this.body.analyze();
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(WhileStatement ${this.condition} { ${this.body} })`);
  }
}

module.exports = WhileStatement;
