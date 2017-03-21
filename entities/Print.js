const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constuctor(body) {
    super();
    this.body = body;
  }
  toString() {
    return (`burp ${this.body}`);
  }
  Print.prototype.analyze = (context) => {
    this.body.analyze(context);
  }

}

module.exports = Print;
