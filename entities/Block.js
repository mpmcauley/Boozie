class Block {
  constuctor(statements) {
    this.statements = statements;
  }
  analyze(context) {
    this.statements.forEach(s => s.analyze(context));
  }
  toString() {
    return (this.statements);
  }
}

module.exports = Block;
