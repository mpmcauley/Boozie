const Expression = require('../entities/Expression.js');

class Pattern extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }
  toString() {
    return (`(Patter ${this.value})`);
  }
}

module.exports = Pattern;
