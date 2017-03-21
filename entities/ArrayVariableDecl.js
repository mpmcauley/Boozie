const Statement = require('../entities/Statement.js');

class ArrayVariableDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    return (`let ${this.id.join(', ')} = [ ${this.value.join(', ')} ] `);
  }
}

module.exports = ArrayVariableDecl;
