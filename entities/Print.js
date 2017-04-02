const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constuctor(argument) {
    super();
    this.argument = argument;
  }
    // if(this.argument.type !== Type.STRING) {
    //   error('You can only print strings')
    // }
  toString() {
    return (`burp ${this.body}`);
  }
}

module.exports = Print;
