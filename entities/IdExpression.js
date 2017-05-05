const Expression = require('../entities/Expression.js');

class IdExpression {
  constructor(id) {
    // super();
    this.id = id;
  }
  analyze(context) {
    // this.id()
    this.id = context.lookup(this.id); // not used I believe
    // if (!context.lookup(this.idValue)) {
    //   throw new Error(`${this.idValue} has not been declared`);
    // }
  }
  optimize() {
    return this;
  }
  toString() {
    return (`${this.id}`);
  }
}

module.exports = IdExpression;
