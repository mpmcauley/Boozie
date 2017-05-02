class Block {
  constructor(statements) {
    this.statements = statements;
  }
  analyze(context) {
    this.statements.forEach(s => s.analyze(context));
  }
  optimize() {
    this.statements.forEach(s => s.optimize());
    return this;
  }
  toString() {
    return (`(Block ${this.statements})`);
  }
  // Block.prototype.analyze = (context) => {
  //   localContext = context.createChildContext();
  //   for statements in this.body {
  //     this.body.analyze(localContext);
  //   }
  // }
}

module.exports = Block;
