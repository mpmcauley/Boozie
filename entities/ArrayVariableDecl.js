const Statement = require('../entities/Statement.js');

class ArrayVariableDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  analyze(context) {
    context.declare(this.id, this);
      // context.declare(this.id, this, this.value);
  }
  toString() {
    return (`(ArrayVariableDecl let ${this.id.join(', ')} = [ ${this.value.join(', ')} ] )`);
  }
}

module.exports = ArrayVariableDecl;
