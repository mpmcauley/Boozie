const Expression = require('../entities/Expression.js');
const error = require('../error.js');

class IdExpression extends Expression {
  constructor(idValue) {
    super();
    this.idValue = idValue;
  }
  analyze(context) {
    if (!context.hasBeenDeclared(this.idValue)) {
      error(`${this.idValue} has not been declared`);
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
