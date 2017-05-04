const Statement = require('../entities/Statement.js');

class Print extends Statement {
  constructor(body) {
    super();
    this.body = body;
    console.log("!!!!!!!!!!!!!!!" + body);
  }
    // if(this.argument.type !== Type.STRING) {
    //   error('You can only print strings')
    // }
  analyze(context) {
    // this.body.analyze(context);
    // console.log(this.body);
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Print ${this.body})`);
  }
  // Print.prototype.analyze = (context) => {
  //   this.body.analyze(context);
  // }

}

module.exports = Print;
