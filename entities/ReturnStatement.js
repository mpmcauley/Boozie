class ReturnStatement extends Statement {
  constructor(body) {
    this.body = body;
  }
  toString() {
    "return " + this.body;
  }
}

ReturnStatement.prototype.analyze = (context) => {
  this.body.analyze(context);
}

module.exports = ReturnStatemnt;
