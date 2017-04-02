const Statement = require('../entities/Statement.js');

class ConstDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  analyze(context) {
    context.declare(this.id);
  }
  toString() {
    return (`set ${this.id.join(', ')} = ${this.value.join(', ')}`);
  }
}

module.exports = ConstDecl;
