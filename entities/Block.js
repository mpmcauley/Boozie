class Block {
  constructor(statements) {
    this.statements = statements;
  }
  analyze(context) {
    this.statements.forEach(s => s.analyze(context));
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Block ${this.statements})`);
  }
}

module.exports = Block;
