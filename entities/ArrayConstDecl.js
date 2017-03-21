const Statement = require('../entities/Statement.js');

class ArrayConstDecl extends Statement {
  constructor(id, type, value) {
    super();
    this.id = id;
    this.type = type;
    this.value = value;
  }
  toString() {
    return (`set ${this.id.join(', ')} = [ ${this.value.join(', ')} ] `);
  }
  ArrayConstDecl.prototype.analyze = (context) => {
    this.id.analyze(context);
    this.type.analyze(context);
    this.value.analyze(context); 
  }
}

module.exports = ArrayConstDecl;
