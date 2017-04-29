const Literal = require('../entities/literal.js');
const Type = require('../entities/Type.js');

class FloatLiteral extends Literal {
  constructor(float) {
    super();
    this.value = float;
  }
  analyze() {
    this.type = Type.FLOAT;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(FloatLiteral ${this.value}.0)`);
  }
}
//
// FloatLiteral.prototype.analyze = (context) => {
//   this.type = Type.FLOAT;
// };

module.exports = FloatLiteral;
