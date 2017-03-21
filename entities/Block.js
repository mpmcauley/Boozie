class Block {
  constuctor(body) {
    super();
    this.body = body;
  }
  toString() {
    return (this.body);
  }
  Block.prototype.analyze = (context) => {
    localContext = context.createChildContext();
    for statements in this.body {
      this.body.analyze(localContext);
    }
  }
}

module.exports = Block;
