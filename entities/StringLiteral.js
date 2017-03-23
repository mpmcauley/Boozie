const Literal = require('../entities/literal.js');
const Type = require('../entities/Type.js');

class StringLiteral extends Literal {
  constructor(string) {
    super();
    this.value = string;
  }

  analyze() {
    this.type = Type.STRING;
  }
  toString() {
    return (`" +  ${this.value} "`);
  }
}

module.exports = StringLiteral;
