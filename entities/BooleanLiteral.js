const Literal = require('../entities/literal.js');

class BooleanLiteral extends Literal {
  constructor(bool) {
    super();
    this.value = bool;
  }
  toString() {
    return (this.value);
  }
}

BooleanLiteral.prototype.analyze = (context) => {
  this.bool = Type.BOOL;
};

module.exports = BooleanLiteral;
