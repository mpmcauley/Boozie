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
<<<<<<< HEAD
    return (`(Print burp ${this.body})`);
=======
    return (`burp ${this.argument}`);
>>>>>>> master
  }
}

module.exports = Print;
