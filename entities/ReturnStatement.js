class ReturnStatement extends Statement {
  constructor(body) {
    super();
    this.body = body;
  }
  toString() {
    return (`return ${this.body}`);
  }
}

module.exports = ReturnStatement;
