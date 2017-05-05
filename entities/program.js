const Context = require('../entities/Context.js');

class Program {
  constructor(block) {
    this.block = block;
  }
  analyze() {
    const context = new Context({ parent: Context.INITIAL_CONTEXT });
    this.block.analyze(context);
  }
  optimize() {
    this.block = this.block.optimize();

    return this;
  }
  toString() {
    return (`(Program ${this.block})`);
  }
}
module.exports = Program;
