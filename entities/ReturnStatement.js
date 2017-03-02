class ReturnStatement extends Statement {
  constructor(body) {
    this.body = body;
  }
  toString() {
    "return " + this.body;
  }
}

module.exports = ReturnStatemnt;
