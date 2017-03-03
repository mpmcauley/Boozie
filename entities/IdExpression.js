const Expression = require('../entities/Expression.js');

class IdExpression extends Expression {
  constructor(idValue) {
    super();
    this.value = idValue;
  }
  toString() {
    return (this.value);
  }
}

module.exports = IdExpression;
