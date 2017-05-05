const Expression = require('../entities/Expression.js');

class IdExpression {
  constructor(id) {
    // super();
    this.id = id;
  }
  analyze(context) {
    this.id = context.lookup(this.id);
  }
  optimize() {
    return this;
  }
  toString() {
    return (`${this.id}`);
  }
}

module.exports = IdExpression;
