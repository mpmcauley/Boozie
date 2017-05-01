const Expression = require('../entities/Expression.js');

class IdExpression extends Expression {
  constructor(id, referent) {
    super();
    this.id = id;
  }
  analyze(context) {
    this.referent = context.lookup(this.id);
    if (!context.lookup(this.id)) {
      throw new Error(`${this.id} has not been declared`);
    }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(IdExpression ${this.id})`);
  }
}

module.exports = IdExpression;
