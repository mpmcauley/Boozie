const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constuctor(argument) {
    
    this.argument = argument;
  }
    // if(this.argument.type !== Type.STRING) {
    //   error('You can only print strings')
    // }
  toString() {
    return (`burp ${this.argument}`);
  }
}

module.exports = Print;
