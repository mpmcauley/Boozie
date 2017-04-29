class Statement {
  constructor(body) {
    this.body = body;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Statement ${this.body})`);
  }
}
module.exports = Statement;
