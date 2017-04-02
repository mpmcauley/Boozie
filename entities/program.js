const Context = require('../entities/Context.js');

class Program {
  constructor(block) {
    this.body = block;
  }

  analyze() {
    this.body.analyze(Context.INITIAL_CONTEXT);
  }

  toString() {
    return (`(Program  ${this.body})`);
  }
}
module.exports = Program;
