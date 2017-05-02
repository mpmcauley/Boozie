const Expression = require('../entities/Expression.js');

class IdExpression extends Expression {
  constructor(id) {
    super();
    this.id = id;
  }
  analyze(context) {
    this.referent = context.lookup(this.id); // not used I believe
    // if (!context.lookup(this.idValue)) {
    //   throw new Error(`${this.idValue} has not been declared`);
    // }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(IdExpression ${this.id})`);
  }
}

module.exports = IdExpression;
