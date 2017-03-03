class IfStatement extends Statement {
  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }
  toString() {
    return (`if ${this.condition} { + ${this.body} } `);
  }
}

module.exports = IfStatement;
