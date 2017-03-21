class Statement {
  constructor(body) {
    this.body = body;
  }
  toString() {
    return (this.body);
  }
  Statement.prototype.analyze = (context) => {
    this.body.analyze(context);
  }
}

module.exports = Statement;
