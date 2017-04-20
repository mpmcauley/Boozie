class Block {
  constuctor(statements) {
    super();
    this.statements = statements;
  }
  analyze() {
    this.statements.forEach(s => s.analyze());
  }
  toString() {
    return (`(Block ${this.statements})`);
  }
}

module.exports = Block;
