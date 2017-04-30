const Literal = require('../entities/literal.js');
const Type = require('../entities/Type');

class BooleanLiteral extends Literal {
  constructor(bool) {
    super();
    this.value = bool;
  }
  analyze() {
    this.type = Type.BOOL;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(BooleanLiteral ${this.value})`);
  }
}

module.exports = BooleanLiteral;
