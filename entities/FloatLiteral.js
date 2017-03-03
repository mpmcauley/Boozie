const Literal = require('../entities/Literal.js');

class FloatLiteral extends Literal {
  constructor(float) {
    super();
    this.value = float;
  }
  toString() {
    return (`${this.value}.0`);
  }
}

module.exports = FloatLiteral;
