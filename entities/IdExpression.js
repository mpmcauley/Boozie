const Expression = require('../entities/Expression.js');
const error = require('../error.js');

class IdExpression extends Expression {
  constructor(idValue) {
    super();
    this.value = idValue;
  }
  analyze(context) {
    if (!context.hasBeenDeclared(this.idValue)) {
      error(`${this.idValue} has not been declared`);
    }
  }
  toString() {
    return (`(IdExpression ${this.value})`);
  }
}

module.exports = IdExpression;
