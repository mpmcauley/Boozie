const Literal = require('../entities/Literal.js');

class StringLiteral extends Literal {
  constructor(string) {
    super();
    this.value = string;
  }
  toString() {
    return (`" +  ${this.value} "`);
  }
}

module.exports = StringLiteral;
