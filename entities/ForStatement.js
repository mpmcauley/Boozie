const Statement = require('../entities/Statement.js');

class ForStatement extends Statement {
  constructor(identifier, structure, body) {
    super();
    this.for = identifier;
    this.in = structure;
    this.body = body;
  }
  toString() {
    return (`for ${this.for} in ${this.in} { ${this.body} } `);
  }
}

module.exports = ForStatement;
