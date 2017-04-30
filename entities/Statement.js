class Statement {
  constructor(body) {
    this.body = body;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`${this.body}`);
  }
}
module.exports = Statement;
