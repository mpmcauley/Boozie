const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constructor(argument) {
    super();
    this.argument = argument;
  }
    // if(this.argument.type !== Type.STRING) {
    //   error('You can only print strings')
    // }
  optimize() {
    return this;
  }
  toString() {
    return (`(Print burp ${this.argument})`);
  }
  Print.prototype.analyze = (context) => {
    this.body.analyze(context);
  }

}

module.exports = Print;
