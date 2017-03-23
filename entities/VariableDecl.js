const Statement = require('../entities/Statement.js');

class VariableDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  analyze(context) {
    context.declare(this.id, this);
  }
  toString() {
    return (`let ${this.id.join(', ')} = ${this.value.join(', ')}`);
  }
}

module.exports = VariableDecl;
