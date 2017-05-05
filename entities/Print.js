const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constructor(body) {
    super();
    this.body = body;
  }
    // if(this.argument.type !== Type.STRING) {
    //   error('You can only print strings')
    // }
  analyze(context) {
  }
  optimize() {
    if (this.body) {
      this.body = this.body.optimize();
    }
    return this;
  }
  toString() {
    return (`(Print ${this.body})`);
  }

}

module.exports = Print;
