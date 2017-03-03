const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constuctor(body) {
    super();
    this.body = body;
  }
  toString() {
    return (`burp ${this.body}`);
  }
}

module.exports = Print;
