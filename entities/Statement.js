class Statement {
  constructor(body) {
    this.body = body;
  }
  analyze(context) {
    this.body.analyze(context);
  }
  optimize() {
    return this;
  }
  toString() {
    return (`${this.body}`);
  }
}
module.exports = Statement;
