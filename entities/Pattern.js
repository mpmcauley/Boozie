const Expression = require('../entities/Expression.js');

class Pattern extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }
  toString() {
    return (this.value);
  }
  Pattern.prototype.analyze = (context) => {
    this.value.analyze(context);
  }
}

module.exports = Pattern;
