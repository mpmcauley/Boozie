const Statement = require('../entities/Statement.js');

class ArrayConstDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  };
  ArrayConstDecl.prototype.analyze = (context) => {
    context.variableMustNotBeAlreadyDeclared(this.id);
    return context.addVariable(this.id, this);
  };
  toString() {
    return (`set ${this.id.join(', ')} = [ ${this.value.join(', ')} ] `);
  }
}

module.exports = ArrayConstDecl;
