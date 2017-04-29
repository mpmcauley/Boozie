const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constructor(argument) {
    super();
    this.body = argument;
  }
    // if(this.argument.type !== Type.STRING) {
    //   error('You can only print strings')
    // }
  toString() {
    return (`(Print burp(${this.body}))`);
  }
}

module.exports = Print;
