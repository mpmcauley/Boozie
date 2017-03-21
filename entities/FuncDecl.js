const Statement = require('../entities/Statement.js');

class FuncDecl extends Statement {
  constructor(id, args) {
    super();
    this.id = id;
    this.args = args;
  }
  toString() {
    return (`let ${this.id} = ${this.args}`);
  }
}

module.exports = FuncDecl;
