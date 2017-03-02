class WhileStatement extends Statement {
  constructor(condition, body) {
    this.condition = condition;
    this.body = body;
  }
  toString() {
    "while " + this.condition + " { " + this.body + " } ";
  }
}

module.exports = WhileStatement;
