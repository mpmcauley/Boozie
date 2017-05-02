const Statement = require('../entities/Statement.js');
const Context = require('../entities/Context.js');

class WhileStatement extends Statement {
  constructor(condition, body) {
    super();
    // this.condition = condition;
    // this.body = body;
    Object.assign(this, { condition, body });
  }
  analyze(context) {
    this.condition.analyze(context);
    const bodyContext = new Context({ parent: context, inLoop: true });
    // this.condition.type.mustBeBoolean('Condition in while statement');
    // if (this.condition.type !== Type.BOOL) {
    //   error('While condition must be boolean');
    // }
    this.body.forEach(s => s.analyze(bodyContext));
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(WhileStatement ${this.condition} { ${this.body} })`);
  }
}

module.exports = WhileStatement;
