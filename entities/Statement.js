class Statement {
  constructor(body) {
    this.body = body;
  }
  toString() {
    return (`(Statement ${this.body})`);
  }
}
module.exports = Statement;
