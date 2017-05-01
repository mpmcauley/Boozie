const Expression = require('../entities/Expression.js');

class IdExpression extends Expression {
  constructor(idValue) {
    super();
    this.idValue = idValue;
  }
  analyze(context) {
    // this.referent = context.lookup(this.id);
    if (!context.lookup(this.idValue)) {
      throw new Error(`${this.idValue} has not been declared`);
    }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(IdExpression ${this.idValue})`);
  }
}

module.exports = IdExpression;
