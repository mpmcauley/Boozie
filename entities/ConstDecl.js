const Statement = require('../entities/Statement.js');

class ConstDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  analyze(context) {
    context.declare(this.id); // TODO -- doesn't account for the fact that constants can not be changed
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(ConstDecl set ${this.id.join(', ')} = ${this.value.join(', ')})`);
  }
}

module.exports = ConstDecl;
