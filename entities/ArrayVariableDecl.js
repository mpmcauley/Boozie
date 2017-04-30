const Statement = require('../entities/Statement.js');

class ArrayVariableDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  ArrayVariableDecl.prototype.analyze(context) {
    context.variableMustNotBeAlreadyDeclared(this.id);
    return context.addVariable(this.id, this);
  }
  analyze(context) {
    context.declare(this.id, this);
      // context.declare(this.id, this, this.value);
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(ArrayVariableDecl let ${this.id.join(', ')} = [ ${this.value.join(', ')} ] )`);
  }

}

module.exports = ArrayVariableDecl;
