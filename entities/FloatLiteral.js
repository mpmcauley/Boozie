const Literal = require('../entities/literal.js');

class FloatLiteral extends Literal {
  constructor(float) {
    super();
    this.value = float;
  }
  toString() {
    return (`${this.value}.0`);
  }
}

FloatLiteral.prototype.analyze = (context) => {
  this.type = Type.FLOAT;
};

module.exports = FloatLiteral;
