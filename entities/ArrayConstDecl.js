const Statement = require('../entities/Statement.js');

class ArrayConstDecl extends Statement {
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
    return (`(ArrayConstDecl set ${this.id.join(', ')} = [ ${this.value.join(', ')} ] )`);
  }
}

module.exports = ArrayConstDecl;
