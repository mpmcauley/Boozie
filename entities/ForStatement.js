class ForStatement extends Statement {
  constructor(identifier, structure, body) {
    this.for = identifier;
    this.in = structure;
    this.body = body;
  }
    toString() {
      "for " + this.for + " in " + this.in + " { " + this.body + " } ";
    }
}

module.exports = ForStatement;
