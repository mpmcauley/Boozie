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
  // Statement.prototype.analyze = (context) => {
  //   this.body.analyze(context);
  // }
}
module.exports = Statement;
