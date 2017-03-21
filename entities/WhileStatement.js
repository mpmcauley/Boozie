class WhileStatement extends Statement {
  constructor(condition, body) {
    this.condition = condition;
    this.body = body;
  }
  toString() {
    "while " + this.condition + " { " + this.body + " } ";
  }
}

WhileStatement.prototype.analyze = (context) => {
  this.condition.analyze(context);
  return this.body.analyze(context);
};

module.exports = WhileStatement;
